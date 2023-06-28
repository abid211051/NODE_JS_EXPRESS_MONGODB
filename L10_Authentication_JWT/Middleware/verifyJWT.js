require('dotenv').config();
const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWTKEY);
        req.user = decoded;
        console.log(req.user);
        next();
    } catch(err) {
        next("Authentication failure!");
    }
};


module.exports = verifyToken