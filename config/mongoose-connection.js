const mongoose = require("mongoose")
const config = require("config");
// const dbgr = require("debug")("development:mongoose");

mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)// this work on the basic of the environment value , gets value according to that 
    .then(function () {
        console.log("connected");
        
    })
    .catch(function (err) {
        console.log(err)
    })

module.exports = mongoose.connection;










