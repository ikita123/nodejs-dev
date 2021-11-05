// const path =require("path");
const express=require("express");
// const ejs =require("ejs");
// const bodyparser=require("body-parser");
const app=express();

// create Databses Connection

const mysql=require("mysql");
const con=mysql.createConnection({
    user:"root",
    password:"Nikita@12345",
    host:"localhost"
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected")
    con.query("CREATE DATABASE nodecrud  ",function(err,result){
        if(err) throw err;
        console.log("database created")
    })
})

// const mysql=require("mysql");
// const Connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Nikita@12345",
//     database:"node crud"
// })
// Connection.connect(function(error){
//     if(error) console.log(error);
//     else console.log("Database Connected")
// });

// app.get("/",(req,res)=>{
//     res.send('CRUD opration using nodejs/Express js/mysql')
// })

// //server listening
// app.listen(2007,()=>{
//     console.log("server running at port 2007");
// })
// create Databses Connection

// const mysql=require("mysql");
// const Connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Nikita@12345",
//     database:"node crud"
// })