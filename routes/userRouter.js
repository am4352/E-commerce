const express = require("express")
const router = express.Router();
const userModel = require("../models/user-models")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/generateTokens");
const { registerUser, loginUser } = require("../controllers/authController");


router.post("/register", registerUser);

router.post("/login", loginUser)





module.exports = router;

















