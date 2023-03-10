const express = require("express");
const router = express.Router();
require("../conn");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
router.get("/",(req,res)=>{
    res.send("hello from router side");
})
router.post("/register",async(req,res)=>{
    try{
        const {name,email,phone,work,password,cpassword}=req.body;
        if(!name || !email || !phone || !work || !password || !cpassword){
           return res.status(422).json({error:"enter your fields properly"});
        }
            const findUser = await User.findOne({email:email});
            if(findUser){
                return res.status(422).json({error:"email already exits"});
            }else if(password!=cpassword){
                return res.status(422).json({error:"passwords are not matching"});
            }else{
                const user = new User({name,email,phone,work,password,cpassword});
                await user.save();
                res.status(201).json({message:"user registered"})
            }

    }catch(err){
        console.log(err)
    }
})
router.post("/signin",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            res.status(400).json({error:"please enter all the details"})
        }
        const userLogin = await User.findOne({email:email});
        if(!userLogin){
            res.status(400).json({error:"invalid credential"})
        }else{
            const isMatch = await bcrypt.compare(password,userLogin.password);
            let token = await userLogin.generateAuthToken();
            console.log(token);
            const cok = res.cookie("jwt",token,{
                expire:new Date(Date.now + 3000000),
                httpOnly:true
            })
            console.log(cok);
            if(!isMatch){
                res.status(400).json({error:"invalid username or password"});
            }else{
                res.status(201).json({message:"user signin successfully"});
            }
        }
    }catch(err){
        console.log(err);
    }
})
router.get("/about",authenticate,(req,res)=>{
    res.send("welcome to about us page");
})
module.exports=router;