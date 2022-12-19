var express = require('express');
var router = express.Router();
const up = require('upper-case')

//  DID'NT USED

// const credential={
//   email:"admin12345@gmail.com",
//   password:"admin12345"
// }

// router.get('/', function(req, res, next) {
//   res.render('dashboard', { title: 'DASHBOARD'});
// });

//login user

// router.post('/login',(req,res)=>{
//   if(req.body.email==credential.email&&req.body.password==credential.password){
  
//       req.session.user=req.body.email;
//       res.redirect('/users');
//     // res.end("login Sucessful");
//   }else{
//     res.render('index',{title:"LOGIN FORM",logout:up.upperCase("invalid username")})
//   }
// })

// //route for dashboard
// router.get('/',(req,res)=>{
//   if(req.session.user){
//       res.render('dashboard',{user:req.session.user});
//   }else{
//       res.render('index',{title: "LOGIN FORM"});
//   }
// })

// //route for logut
// router.get('/logout',(req,res)=>{
//   req.session.destroy(function(err){
//       if(err){
//           console.log(err);
//           res.send("error")
//       }else{
//           res.render('index',{title:"LOGIN FORM",logout :"logout succesfully..!"})
//       }
//   })
// })




module.exports = router;
