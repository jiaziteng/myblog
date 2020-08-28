const express=require("express");
const router=express.Router();
const {checkLogin}=require("../middlewares/check");
router.get("/",function(req,res){
  res.send("主页")
})
router.post("/create",checkLogin,function(req,res){
   res.setEncoding("创建文章")
})
router.get("/create",checkLogin,function(req,res){
  res.setEncoding("创建文章页")
})
router.get("/:postId",function(req,res){
  res.send("文章详情页")
})
router.get("/:postId/edit",checkLogin,function(req,res){
  res.send("更新文章页")
})
router.post("/:postId/edit",checkLogin,function(req,res){
  res.send("更新文章页")
})
router.get("/:postId/remove",checkLogin,function(req,res){
  res.send("删除文章")
})
module.exports=router;
