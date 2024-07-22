import express from "express"; 
import axios from "axios"; 
import { User } from "../models/users.models.js";
import updatePasswordRouter from "./updatePassword.routes.js"
import { UserData } from "../models/userData.models.js";
const router = express.Router();


router.use("/updatePassword",updatePasswordRouter); 

router.post("/addUserData",async (req,res)=>{
    const {age,allergies,pastDisease,currentDisease} = req.body; 
    if(!age){
        return res.json({"message": "Age is required"}).status(400); 
    }
    const email = req.user.email ; 
    const user = await User.findOne({email}); 
    if(!user.userData){
        try{
            const userData = new UserData({age,allergies,pastDisease,currentDisease}); 
            await userData.save(); 
            user.userData = userData ; 
            await user.save(); 
            res.json({"message": "done"}); 
        }catch(e) {
            console.log(e); 
            res.status(401).json({"message": "invalid syntax"}); 
        }
    }else{
        return res.json({"message" : "already Added"}); 
    }
}); 

router.post("/getUserData", async(req,res)=>{
    const email = req.user.email;
    const user = await User.findOne({email}); 
    if(!user.userData){
        return res.json({"message" : "No User Data Inserted"}); 
    }
    
    const id = user.userData ; 
    const userData = await UserData.findOne({_id : id}); 
    res.send(userData); 
}); 

router.post("/gen", async (req, res) => {
    try {
        const query = req.body.query;
        const response = await axios.post('http://127.0.0.1:8000/generate', { query });

        const result = await response.data.answer;
        console.log(result);

        res.status(200).json({ result });
    } catch (error) {
        console.error('Error making POST request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post("/userInfo", async (req,res)=>{
    res.send({
        Name : req.user.fullName,
        Email : req.user.email
    }).status(200); 
}); 

export default router; 