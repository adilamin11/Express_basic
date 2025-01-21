var express = require("express")
var userRouter = express.Router()


userRouter.get("/user",(req,res)=>{
    res.send("user is adfar")
})
userRouter.get("/details",(req,res)=>{
    res.send("userdetails")
})
module.exports = userRouter;