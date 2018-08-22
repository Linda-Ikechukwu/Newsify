const express = require("express");
const request = require("request");
var app = express();

app.get("/",function(req,res){
   res.send("Hi There!!")
});

app.listen(4000, () => console.log('Newsify app listening on port 4000!'));