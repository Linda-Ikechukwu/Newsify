const express = require("express");
const request = require("request");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//ROUTES

app.get("/", function(req, res){
   res.render("home");
});

app.get("/results/keyword",function(req,res){
   let keywordResults = req.query.keyword;
   let url = "https://newsapi.org/v2/everything?q="+keywordResults+"&apiKey=9b2406747cdb42a4bccfa4a7967da150"; 
   request.get(url,function(error, response, body){
     if(!error && response.statusCode == 200){
         let data = JSON.parse(body);
         res.render("keyword", {data: data});
     }else{
       res.render("404");
     }
   });
});

app.get("/results/category", function(req,res){
  let categoryResult = req.query.category;
  let url = "https://newsapi.org/v2/top-headlines?country=ng&category="+categoryResult+"&apiKey=9b2406747cdb42a4bccfa4a7967da150";
  request.get(url,function(error, response, body){
    if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("category", {data: data});
    }else{
      res.render("404");
    }
  });
});

app.listen(4000, () => console.log('Newsify app listening on port 4000!'));