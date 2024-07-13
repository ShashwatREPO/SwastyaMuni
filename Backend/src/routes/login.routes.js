import passportLocal from "../middlewares/passportLocalConfig.middleware.js";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res, next) => {
  passportLocal.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        valid: false,
        message: "Unauthorized",
      });
    }
    req.login(user, { session: false }, async (error) => {
      if (error) return next(error);
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || "your_jwt_secret_here"
      );
      return res.json({
        valid: true,
        token: token,
      });
    });
  })(req, res, next);
});


export default router;
