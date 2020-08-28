const express=require("express");
const router=express.Router();
const {checkLogin}=require("../middlewares/check");
router.post("/",checkLogin,function(req,res){
  res.send("留言")
})
router.get("/:commentId/remove",checkLogin,function(req,res){
  res.send("删除留言")
})
module.exports=router;
