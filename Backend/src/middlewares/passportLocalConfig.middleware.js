import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email or password." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect email or password." });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
