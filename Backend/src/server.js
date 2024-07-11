import express from "express";
import connectDB from "./db/index.js"; 
import app from "./app.js";
import dotenv, { config } from "dotenv"; 

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8001 ; 

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on PORT ${PORT}`); 
    })
})
.catch((e)=>{
    console.log("Mongodb connection error",e); 
})

