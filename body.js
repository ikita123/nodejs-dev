

var express = require('express');
var app = express();
let bodyparser=require("body-parser")
app.listen(3000);

let people={
   "nikita":{name:"Nikita",age:19},
   "bob":{name:"bob",age:18},
   "charlie":{name:"charlie",age:25}
}
app.post('/search',bodyparser.urlencoded({extended:false}),(req,res,next)=>{


})

app.get("/",(req,res)=>{
   res.sendFile(__dirname+'/index.html')
})
app.get('/profile',(req,res)=>{

})