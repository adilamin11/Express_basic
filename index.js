var express = require("express")
var userRouter = require("./Routes/userRouter")
var adminRouter = require("./Routes/adminRouter")
var userlogin =require("./Routes/userlogin")
var fs = require("fs")
var path = require("path")
var app = express()
app.use("/api",userRouter)
app.use("/admin",adminRouter)
app.use("/login",userlogin)


var data = fs.readFileSync("./public/index.html","utf-8")
var staticPath =path.join(__dirname,"public")
app.use(express.static(staticPath))
// console.log(express);

app.get("/",(req,res)=>{
 res.send(data)
  res.sendFile(path.join(staticPath,"index.html"))

})

app.get("/about",(req,res)=>{
    // res.send("this is about page")
    res.sendFile(path.join(staticPath,"about.html"))
})
app.get("/contact",(req,res)=>{
    // res.send("welccome to contact page")
    res.sendFile(path.join(staticPath,"contact.html"))
})
app.listen(4000,()=>{
    console.log("listening to port 4000");
    
})