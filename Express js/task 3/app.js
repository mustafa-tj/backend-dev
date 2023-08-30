// Routers And Filters

const express = require('express');
const app = express();

const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');

const bodyParser = require('body-parser');
const exp = require('constants');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactusRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


app.listen(3000);