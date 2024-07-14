import express from "express"; 
import signupRouter from "./signup.routes.js";
import loginRouter from "./login.routes.js"; 
import googleRouter from "./googleAuth.routes.js";
import forgetPasswordRouter from "./forgetPassword.routes.js"; 
import resetPasswrodRouter from "./resetPassword.routes.js"; 

const router = express.Router();

router.use('/login',loginRouter);

router.use("/signup",signupRouter); 

router.use('/google',googleRouter);

router.use("/forgotPassword",forgetPasswordRouter); 

router.use("/resetPassword",resetPasswrodRouter); 

export default router;