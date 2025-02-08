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
    let { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    console.log(user)
    if (!user) {
         return res.send("invalid credentials ")        
    }
    const ismatch = await bcrypt.compare(password, user.password, function (err, result) {
        const token = generateToken(user);
        res.cookie("token", token, { httpOnly: true, secure: false });
       if (result) { // should use result parameter
          return res.render("shop")
       }
       else {
           return res.send("you can not login")
       }
    })
}









