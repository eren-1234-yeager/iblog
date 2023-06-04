const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Meow");
})

module.exports=router;