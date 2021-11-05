var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!")
   console.log("connect");
});

app.post('/about', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000,()=> {
   console.log("Running")
});

