const mongoose = require("mongoose")
const product = require("./product-model")

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId, //typing error
        ref: product,
        default: []
    }],
    isadmin: Boolean,
    order: {
        type: Array,
        default:[]
    },
    contact: Number,
    picture: String
    
})

module.exports = mongoose.model("user", userSchema);









