import express from "express" ; 
import { User } from "../models/users.models.js";
import bcrypt from "bcrypt"; 

const router = express.Router(); 


router.post("/",async (req,res) =>{
    const {email,password,newPassword} = req.body ; 
    
    const user = await User.findOne({email}); 
    if(!user){
        res.status(401).json({message : "please enter valid Email"}); 
        return ; 
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(401).json({message : "Wrong ! Password "}); 
        return ; 
    }

    user.password = await bcrypt.hash(newPassword,10); 

    await user.save(); 

    res.status(200).json({message : "Password! Updated Successfully."}); 
}); 


export default router; 