const jwt = require("jsonwebtoken");
const { Error } = require("mongoose");
const User = require("../model/userSchema");

const authenticate =async(req,res,next)=>{
    try{
        const cookie_token = req.cookies.jwt;
        const verifyToken = jwt.verify(cookie_token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:cookie_token._id, "tokens.token":cookie_token})
        if (!rootUser){throw new Error("User Not found")}
        req.cookie_token=token;
        next()
    }catch(error){
        res.status(401).send("unauthorized:no token found");
        console.log(error);
    }
}
module.exports=authenticate;