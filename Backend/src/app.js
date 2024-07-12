import express from "express";
import cors from "cors"; 
import passport from "passport";
import authRoutes from "./routes/auth.routes.js";
import passportGoogle from "./middlewares/passportGooglAuthConfig.middleware.js"; 
import { authenticateJwt } from "./middlewares/passportJWT.middleware.js";


const app = express(); 

app.use(
    cors({
        origin: process.env.CORS_ORIGIN, 
        credentials: true
    })
); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.use(passport.initialize());
app.use(passportGoogle.initialize());
import "./middlewares/passportJWTconfig.middleware.js"

app.use("/auth", authRoutes);

app.get('/',async (req,res)=>{
    res.send("heyyaaaa"); 
}); 

app.get("/protected", authenticateJwt , (req, res) => {
    res.json({ message: "You are authorized!" });
});

export default app; 