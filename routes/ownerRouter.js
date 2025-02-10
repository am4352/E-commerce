const express = require("express")
const router = express.Router();
const config = require("config");
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development")
{
    router.post("/create", async(req, res) => {
        let owners = await ownerModel.find();
        if(owners.length>0)
        {
            res.send("you dont have permission to create a new owner");
        }
        let { fullname, email, password } = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        });
        res.send(createdOwner);
    })
}

// i made a mistake here i used app insted of router (always remember)
router.get("/admin", function (req, res) {
    let success = req.flash("success")
    res.render("createproducts" , {success})
})


module.exports = router;















