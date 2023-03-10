const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const app = express();
dotenv.config({path:"./config.env"});
require("./conn");
app.use(express.json());// to make our program understand that we are dealing with json file
app.use(require("./router/auth"));
const User = require("./model/userSchema");
const middleware = (req,res,next)=>{
    console.log("hi i am a middleware aka dalal");
    next();
}

app.get("/about",middleware,(req,res)=>{
    res.send("hello to the about us page")
})
app.get("/contact",(req,res)=>{
    res.send("hello to the contact page")
})
app.get("/signin",(req,res)=>{
    res.send("hello to the signin page")
})
app.get("/signup",(req,res)=>{
    res.send("hello to the signup page")
})
app.listen(process.env.PORT, ()=>{
    console.log(`connection is successful on port number ${process.env.PORT}`)
})