const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/message',(req,res,next)=>{
    fs.appendFile('message.txt',`${req.body.name}:${req.body.message}`,(err)=>{
        res.redirect('/');
        console.log(err);
    })
});



module.exports=router;