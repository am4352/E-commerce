const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController")
const generateToken = (user) => {
    let { email, fullname } = req.body;
    jwt.sign({ email:email, id: user._id }, process.env.JWT_KEY);
}
module.exports.generateToken = generateToken



