const express=require("express");
const router=express.Router();
const {checkLogin}=require("../middlewares/check");
router.get("/",checkLogin,function(req,res){
 res.send("退出")
})
module.exports=router;
