const userModel = require("../models/user-models")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/generateTokens")

module.exports.registerUser = function (req, res) {
    try {
        let { email, password, fullname } = req.body;
        let user = userModel.findOne({email: email})
        if (user) {
           return res.status(401).send("you already have an account please login");
        }
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const user = await userModel.create({
                    email,
                    password: hash,
                    fullname,
                })
                generateToken(user)
                res.cookie("token", token);
                res.send(token)
                res.send("user created successfully")
            });
        });

    } catch (err) {
        console.log(err);

    } 
}
module.exports.loginUser = function (req, res) {
    
}









