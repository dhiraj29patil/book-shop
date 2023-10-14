const express=require('express')
const mongoose=require('mongoose')
const mongoUri="mongodb+srv://dhiraj03patil:Dhiraj%402000@cluster0.w08qk3r.mongodb.net/"
const port=4000;
const app=express();
const Test=require('./models/bookModel')
app.use(express.json())
const router=express.Router();
const bookRoute = require("./routes/booksRoutes");

mongoose.connect(mongoUri)
    .then(() => {
        //listnener for request
        app.listen(port, () => {
            console.log("connected to db");
            console.log("Server is running on port ", port);
        })
    })
    .catch((err) => {
        console.error("Error connecting", err);
    })

app.use("/api/v1", bookRoute);

app.use('/api', router);