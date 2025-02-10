const { configDotenv } = require("dotenv");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-models")
require('dotenv').config();
const generateToken = (user) => {
    if (!process.env.JWT_KEY) {
        console.error("Error: JWT_KEY is undefined!");
        throw new Error("Missing JWT_KEY in environment variables");
    }

   return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);
}
module.exports =  generateToken 



