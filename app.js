const express = require("express");
const db = require("./config/mongoose-connection")
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path");
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const ownerRouter = require("./routes/ownerRouter")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")
app.use("/owner", ownerRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);



app.listen(3000, () => {
    console.log("server started at port 3000");

})















