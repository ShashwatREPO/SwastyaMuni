import express from "express"; 
import { User } from "../models/users.models.js";
import { UserData } from "../models/userData.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 

const router = express.Router(); 

router.post("/", async (req, res, next) => {
    const { fullName, email, password, age, allergies, pastDisease, currentDisease } = req.body;
    let newUser ; 
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                valid : false, 
                message: "User already exists with this email" 
            });
        }

        const newUserData = new UserData({ age : parseInt(age), allergies, pastDisease, currentDisease });
        await newUserData.save();

        const hashedPassword = await bcrypt.hash(password, 10);

        newUser = new User({
            fullName,
            email,
            password : hashedPassword,
            userData: newUserData._id
        });
        await newUser.save();

       const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET || "your_jwt_secret_here");
        res.status(201).json({
            valid : true,  
            token : token 
        });
    } catch (error) {
        console.error("Signup failed:", error);

        if (error.name === "ValidationError" && error.errors && error.errors.email && error.errors.email.kind === "unique") {
            await UserData.deleteOne({ _id: newUser._id });
        }
        
        res.status(500).json({ message: "Signup failed" });
    }
});


export default router ; 
