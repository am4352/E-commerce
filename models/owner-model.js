const mongoose = require("mongoose")
const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,    
    products : {
        type: Array,
        default:[]
    },
    gstIn : String,
    picture: String,


})

module.exports = mongoose.model("owner", ownerSchema);





















