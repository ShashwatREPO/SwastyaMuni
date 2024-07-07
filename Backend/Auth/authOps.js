const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "TempSecret if .env not found";

require('dotenv').config();

// JWT token generation and verification functions
/**
 * Generates a JWT token for the given user and sets it as an HTTP-only cookie.
 *
 * @param {Object} user - The user object with _id and email properties.
 * @param {Object} res - The response object from Express.js.
 */
function generateToken(user, res) {
    const payload = {
        id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, JWT_SECRET);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });
    console.log("Token generated successfully");
    return true;
};

/**
 * Verifies the authenticity of a JSON Web Token (JWT).
 * @param {string} token - The JWT to be verified.
 * @returns {object|boolean} - Returns the decoded token if it is valid, otherwise returns false.
 */
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (err) {
        console.error("Error verifying JWT:", "\n", err);
        return false;
    }
}

// pasword hashing and checking functions usiong bycrypt
/**
 * Generates a hashed password using bcrypt.
 *
 * @param {string} password - The password to be hashed.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
async function hashedPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

/**
 * Compares a plain text password with a hashed password using bcrypt.
 *
 * @param {string} password - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the password is valid.
 */
async function checkPassword(password, hashedPassword) {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
};

module.exports = {
    hashedPassword,
    checkPassword,
    generateToken,
    verifyToken
}