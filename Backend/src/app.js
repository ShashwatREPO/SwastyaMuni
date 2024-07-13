import express from "express";
import cors from "cors";
import passport from "passport";
import authRoutes from "./routes/auth.routes.js";
import passportGoogle from "./middlewares/passportGooglAuthConfig.middleware.js";
import { authenticateJwt } from "./middlewares/passportJWT.middleware.js";
import axios from "axios";


const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passportGoogle.initialize());
import "./middlewares/passportJWTconfig.middleware.js"

app.use("/auth", authRoutes);

app.get('/', async (req, res) => {
    res.send("heyyaaaa");
});

app.post("/protected", async (req, res) => {
    try {
        const query = req.body.query;
        const response = await axios.post('http://127.0.0.1:8000/generate', { query });

        const result = response.answer;

        res.status(200).json({ result });
    } catch (error) {
        console.error('Error making POST request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export default app; 