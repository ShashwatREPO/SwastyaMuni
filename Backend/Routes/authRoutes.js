const express = require("express");
const router = express.Router();
const { User } = require("../database/databaseOPS");
const { hashedPassword, generateToken, checkPassword } = require("../Auth/authOps");
const { validateUserSignup, validateUserLogin } = require("../middlewares/validators");

router.post('/signup', validateUserSignup, async (req, res) => {
    const fullName = req.body.fullName;
    const password = req.body.password;
    const email = req.body.email;

    try {
        // Check for existing user
        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { fullName: fullName }
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password with bcrypt
        const hashPassword = await hashedPassword(password);

        // Create new user with hashed password
        const newUser = await User.create({
            fullName: fullName,
            password: hashPassword,
            email: email,
            userData: {}  // Initialize with an empty object
        });

        // Generate JWT token and set as cookie
        const tokenGenerated = generateToken(newUser, res);
        if (!tokenGenerated) {
            // Delete the user
            await User.deleteOne({ fullName: fullName, email: email });
            console.log("User deleted -- Error generating token -- post signup");

            return res.status(500).json({
                message: "Error creating user"
            });
        }

        res.status(201).json({
            message: "User created successfully",
            _id: newUser._id
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
});

router.post('/login', validateUserLogin, async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const existingUser = await User.findOne({
            email,
        });
        if (!existingUser) {
            return res.status(403).json({
                msg: "User doesn't exist"
            });
        }

        const isValid = await checkPassword(password, existingUser.password);
        if (!isValid) {
            return res.status(403).json({
                msg: "Invalid Credentials"
            });
        }

        // Generate JWT token and set as cookie
        generateToken(existingUser, res);

        res.status(200).json({
            msg: "Login successful"
        });
    } catch (err) {
        res.status(500).json({
            msg: "error",
            error: err
        });
        console.error("Errors:\n" + err);
    }
});

module.exports = router;
