
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send("this is home  page")
});
app.get('/about',function(req,res){
    res.send("this is  about page")
});
app.get('/login',function(req,res){
    res.send("this is  login page")
});
app.listen(4500);