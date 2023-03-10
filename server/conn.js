const mongoose= require("mongoose");
mongoose.set("strictQuery",true);
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{console.log("Ddatabase connection is successful")})
.catch((error)=>{console.log(error)})