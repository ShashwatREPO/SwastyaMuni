import express from "express"; 
import { User } from "../models/users.models.js";
import crypto from "crypto"; 
import nodemailer from "nodemailer"; 

const router = express.Router(); 

function generateOTP() {
    return crypto.randomInt(1000, 10000).toString();
}

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        ciphers: 'SSLv3',
    },
});

router.post("/",async (req,res)=>{
    const {email} = req.body; 
    try{
        const user = await User.findOne( {email} ); 
        if(!user){
            return res.status(400).send('User with email does not exist'); 
        }
        const otp = generateOTP(); 

        user.otp = otp;
        user.otpExpires = Date.now() + 3600000; 

        await user.save(); 
        
        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is: ${otp}\n\nThis OTP is valid for 1 hour.`,
        };
        
        await transporter.sendMail(mailOptions);
        res.status(200).json({message : 'OTP sent to your email'});
    }catch(e){
        console.log('Error in forgot Password finding email',e); 
    }
}); 

export default router; 