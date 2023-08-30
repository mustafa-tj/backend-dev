const path = require('path');
const rootDir = require('../util/path');

exports.contactForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
};

exports.formSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
};