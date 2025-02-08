const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const db = require("./config/mongoose-connection")
const app = express();
require('dotenv').config();
const cookieParser = require("cookie-parser")
const path = require("path");
const indexroutes = require("./routes/index")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const ownerRouter = require("./routes/ownerRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(flash())
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")
app.use("/owner", ownerRouter);
app.use("/products", productRouter);
console.log("test")
app.use("/users", userRouter);
app.use("/", indexroutes)



app.listen(3000, () => {
    console.log("server started at port 3000");

})















