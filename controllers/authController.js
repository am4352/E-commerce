const userModel = require("../models/user-models")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const  generateToken  = require("../utils/generateTokens")

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname } = req.body;
        let user = await userModel.findOne({email: email})
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
                console.log(generateToken);  // Should log a function definition

               const token = generateToken(user)
                res.cookie("token", token);
                res.send(token)
                console.log("user created successfully");
                
            });
        });

    } catch (err) {
        console.log(err);

    } 
}
module.exports.loginUser = async function (req, res) {
    console.log("test1")
    let { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
         return res.send("invalid credentials")        
    }
    const ismatch = bcrypt.compare(password, user.password, function (err, result) {
       console.log(ismatch)
       if (result) { // should use result parameter
            return res.send("you can login")
       }
       else {
           return res.send("you can not login")
       }
    })
}









