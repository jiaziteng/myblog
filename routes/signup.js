const express=require("express");
const router=express.Router();
const {checkNotLogin }=require("../middlewares/check");
router.get("/",checkNotLogin,function(req,res){
 res.send("注册页");
})
router.post("/",checkNotLogin,function(req,res){
  res.send("注册页")
})
module.exports=router;
