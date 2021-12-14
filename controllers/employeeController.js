const express =require('express');
var router=express.Router();

//Routes
router.get('/',(req,res)=>{
res.render('employee/addOrEdit',{
    viewTitle:"Insert Employee"
})
});
module.exports =router;