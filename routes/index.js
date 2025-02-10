const express = require("express")
const router = express.Router()
const { isloggedin } = require("../controllers/isLoggedin");
const productModel = require("../models/product-model");
const userModels = require("../models/user-models");

router.get("/", function (req, res) {
    let error = req.flash("error")
    res.render("index", { error  , loggedin: false})
});

router.get("/shop", isloggedin, async function (req, res) {
    let products = await productModel.find();   
    let success = req.flash("success")
    res.render("shop", { products, success });
})
//: => set as a route parameter 
router.get("/addtocart/:productid", isloggedin, async function (req, res) {
    let user = await userModels.findOne({ email: req.user.email })
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "added to cart");

    res.redirect("/shop");
    console.log("shop rendered")
})

router.get("/cart", isloggedin , async function (req, res) {
    let user = await userModels.findOne({ email: req.user.email }).populate("cart");
    console.log(user.cart);

    if (!user) {
      return req.flash("error", "user not found");
    }
    res.render("cart", { cartItems: user.cart });
   
})

module.exports = router;



