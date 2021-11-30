const dotenv = require("dotenv");

const secret = process.env.SECRET;
const jwt = require("jsonwebtoken");

const authentication = (req, res,next) => {
    try {
        
        console.log(req.headers.authentization);
    } catch (error) {
        res.status(403).json(error)
    }
}

module.exports = authentication;

