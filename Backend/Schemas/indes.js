const zod = require('zod');

const userDataSchema = zod.object({
    age: zod.number(),
    Allergies: zod.string(),
    PastDiseases: zod.string(),
    currentCondition: zod.string()
});

const userSchema = zod.object({
    fullName: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    userData: userDataSchema
});

const singUpSchema = zod.object({
    fullName: zod.string(),
    email: zod.string().email(),
    password: zod.string()
});

const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
});


module.exports = {
    userSchema,
    loginSchema,
    singUpSchema
}