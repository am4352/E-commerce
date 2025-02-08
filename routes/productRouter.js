const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config")
router.get("/", function (req, res) {
    res.render("createproducts")
})
router.post("/create", upload.single('image'), function (req, res) {
   
    console.log("check");    
    res.send(req.file)
     
})

module.exports = router;












