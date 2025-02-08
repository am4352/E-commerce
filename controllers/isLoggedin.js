const jwt = require("jsonwebtoken");
const userModel = require("../models/user-models")
const generateToken = require("../utils/generateTokens")
module.exports.isloggedin = async function(req, res , next)
{
    if (!req.cookies.token)
    {
        console.log("you need to login first")
        req.flash("you need to login first")
        res.redirect("/")
    }
    try {
        let decoded = jwt.verify(req.cookie.token, process.env.JWT_key);
        let user = userModel
            .findOne({email : decoded.email})
            .select("-password") //dont select password
        req.user = user;
        next();
    }
    catch(err)
    {
        req.flash("something went wrong")
        res.redirect("/")
}



}







