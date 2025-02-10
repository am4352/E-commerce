const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config")
const products = require("../models/product-model")
router.post("/create", upload.single('image'), async function (req, res) {
    try {
        
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
       
     return  res.redirect("/owner/admin")
        
    }
    catch(err) {
        return res.send(err.message)
    }
   
})

module.exports = router;



// console.log("check");
// res.send(req.file)









