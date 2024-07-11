import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { User } from "../models/users.models.js";


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "your_jwt_secret_here"
};

passport.use(new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.id); 
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

export default passport;