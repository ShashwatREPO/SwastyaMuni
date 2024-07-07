const { verifyToken } = require("./authOps");

// Middleware function to authenticate the token in the request headers.
function authenticateToken(req, res, next) {
    const token = req.cookies.token;;
    console.log("Token", token);
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized Acess"
        });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({
            message: "Unauthorized Access"
        });
    }
    res.user = decoded;
    next();
};



module.exports = {
    authenticateToken,
}