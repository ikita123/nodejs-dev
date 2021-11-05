var express = require('express');
var app = express();

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(4500);

var express = require('express');
var app = express();

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
app.listen(4500);