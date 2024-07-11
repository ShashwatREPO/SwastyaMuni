import express from "express"; 
import signupRouter from "./signup.routes.js";
import loginRouter from "./login.routes.js"; 
import googleRouter from "./googleAuth.routes.js";

const router = express.Router();

router.use('/login',loginRouter);

router.use("/signup",signupRouter); 

router.use('/google',googleRouter);



export default router;