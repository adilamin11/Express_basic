var express = require('express')
var userlogin = express.Router();
userlogin.get("/log",(req,res)=>{
    res.send("udser logged")
})
module.exports= userlogin;