const zod = require('zod');
const { loginSchema, singUpSchema } = require('../Schemas/indes');


const validateUserSignup = (req, res, next) => {
    const { error } = singUpSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            message: error.errors
        });
    }
    next();
}

const validateUserLogin = (req, res, next) => {
    const { error } = loginSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            message: error.errors
        });
    }
    next();
}

module.exports = {
    validateUserSignup,
    validateUserLogin
}