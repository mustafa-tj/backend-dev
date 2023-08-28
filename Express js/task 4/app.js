const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/home');
const messageRoutes = require('./routes/message');

app.use(loginRoutes);
app.use(homeRoutes);
app.use(messageRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1">Page not found</h1>');
});


app.listen(2000);
