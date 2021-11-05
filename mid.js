var express = require('express');
var app = express();
const middleware=(req,res,next)=>{
    console.log("hello my middleware");
    next();
}
app.get('/',function(req,res){
    res.send("this is home  page")
});
app.get('/about',middleware,(req,res)=>{
    res.send("this is  about page")
});
app.get('/login',function(req,res){
    res.send("this is  login page")
});
app.listen(3000);