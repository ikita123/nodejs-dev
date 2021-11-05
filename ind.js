const express=require("express");
const app=express();
const path=require('path');
const staticpath=path.join(__dirname,"../public")

app.use(express.static(staticpath))

app.get('/',function(req,res){
    res.send("hello for express server")
});
app.get('/about',function(req,res){
    res.send("hello about you")
});
app.listen(2000,()=>{
    console.log("listing the port 2000ni")
})
