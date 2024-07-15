import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/users.models.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp != otp || Date.now() > user.otpExpires) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetPasswordOTP = 0;
    user.resetPasswordExpires = 0;

    await user.save();
    res.status(200).send("Password has been reset");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

export default router;
