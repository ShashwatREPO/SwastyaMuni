const { GoogleGenerativeAIResponseError } = require('@google/generative-ai');
const generateRoute = require("./routes/genrativeResponse");

const express = require('express');


require('dotenv').config;
const app = express();
app.use(express.json());



//routes
app.use("/gen", generateRoute);









app.listen(3000, ()=>{
    console.log("server started")
})