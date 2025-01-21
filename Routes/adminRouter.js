var express = require('express')
var adminRouter = express.Router()
adminRouter.get('/dashboard', (req, res) => {
  res.send('dashboard acess')
})
adminRouter.get('/dashboard/:userid', (req, res) => {
  //: its called param
  var userid = req.params.userid;
// var userid =req.params;
  console.log(userid)   
res.send(userid)
  res.send('user1 display ')
})
module.exports = adminRouter
