// Lets get started with express
const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("in first middleware");
    next();
});

app.use((req,res,next) => {
    console.log("in second middleware");
    res.send("<html><h1>Welcome to express</h1></html>")
})

app.listen(3000);

