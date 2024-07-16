import express from "express";
import { User } from "../models/users.models.js";
import { UserData } from "../models/userData.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res, next) => {
    const { fullName, email, password} = req.body;
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                valid : false, 
                message: "User already exists with this email" 
            });
        }

        if (!password) return res.status(501).json({ message: "password not found" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            email,
            password : hashedPassword,
            otp : Math.random(), 
            otpExpires : Date.now()
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

  }
);

export default router;
