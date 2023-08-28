const express = require('express');
const router = express.Router();


router.get('/login',(req,res,next)=>{
    res.send(`<form action="/" method="POST" onsubmit="localStorage.setItem('Name',document.getElementById('username').value)"><input type="text" id="username" name="name" placeholder="Enter your name"><input type="submit" value="Submit"></form>`)
});



module.exports=router