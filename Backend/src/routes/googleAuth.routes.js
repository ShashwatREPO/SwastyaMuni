import express from "express";
import jwt from "jsonwebtoken";
import passportGoogle from "../middlewares/passportGooglAuthConfig.middleware.js";

const router = express.Router();

router.get(
  "/",
  passportGoogle.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passportGoogle.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id },
      process.env.JWT_SECRET || "your_jwt_secret_here"
    );
    res.redirect(`http://localhost:5173/login?token=${token}`);
  }
);

export default router;
