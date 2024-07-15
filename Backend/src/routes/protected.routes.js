import express from "express"; 
import axios from "axios"; 
import { User } from "../models/users.models.js";
import updatePasswordRouter from "./updatePassword.routes.js"
const router = express.Router();


router.use("/updatePassword",updatePasswordRouter); 

router.post("/gen", async (req, res) => {
    try {
        const query = req.body.query;
        const response = await axios.post('http://127.0.0.1:8000/generate', { query });

        const result = response.answer;

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