import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/users.models.js';
import bcrypt from "bcrypt"; 
import dotenv from 'dotenv';
import { GOOGLE_CALLBACK_URL } from '../constants.js';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : GOOGLE_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
            return done(null, user);
        } else {
            const randomPassword = Math.random().toString(36).slice(-8);

            const hashedPassword = await bcrypt.hash(randomPassword, 10); 
            user = new User({
                fullName: profile.displayName,
                email: profile.emails[0].value,
                password: hashedPassword,
                otp : Math.random(), 
                otpExpires : Date.now()
            });
            await user.save();
            return done(null, user);
        }
    } catch (err) {
        return done(err, false);
    }
}));

export default passport;