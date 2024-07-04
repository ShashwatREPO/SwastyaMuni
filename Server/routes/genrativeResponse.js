const { GoogleGenerativeAI} = require('@google/generative-ai');
const express = require('express');
const genAI = new GoogleGenerativeAI("AIzaSyADiGbKBtfB5_m4e6VRJGkftcKRvJCgT1o");

router = express.Router();


router.post("/generate" , async(req , res)=>{

    try{

        const { query } = req.body;

        const systemPrompt = "You are Swastamuni, an AI specialized in Ayurvedic health advice. A patient approaches you with a complaint: 'I have a persistent headache.' Your empathetic response is, 'Im sorry to hear that. When did the headache start? ' Can you describe the pain—throbbing, sharp, or dull?   Additionally, have you experienced any other symptoms like nausea, sensitivity to light, or neck stiffness?Based on their answers, provide personalized advice, considering their dosha (Vata, Pitta, or Kapha) and any relevant past health issues. "

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction:  systemPrompt,});

        const result = await model.generateContent(query);
        res.status(200).json(result.response.text());

    }catch(e){
        res.status(500).json({msg: e.message});

    }

   

});








module.exports = router;