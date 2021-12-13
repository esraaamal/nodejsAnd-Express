const express =require('express');
var router=express.Router();
//Routes
router.get('/',(req,res)=>{
res.json('sample text')
});
module.exports =router;