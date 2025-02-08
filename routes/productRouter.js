const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config")
const products = require("../models/product-model")
router.get("/", function (req, res) {
    res.render("createproducts")
    res.redirect("./create")
})

router.post("/create", upload.single('image'), async function (req, res) {
    try {
        console.log("product router")
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        let product = await products.create({
            image: req.file.buffer,
            name,
            discount,
            price, 
            bgcolor,
            panelcolor,
            textcolor
        })
        res.send(product)
        await product.save();
        console.log("product saved")
    }
    catch {
        res.send(err.message)
    }
   
})

module.exports = router;



// console.log("check");
// res.send(req.file)









