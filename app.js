const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//ROUTES

app.get("/", function(req,res){
  res.redirect("/news");
});


app.get("/news", function(req, res){
  let url = "https://newsapi.org/v2/top-headlines?language=en&source!=reddit&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
  request.get(url,function(error,response,body){
    if(!error && response.statusCode == 200){
      let data = JSON.parse(body);
      res.render("home", {data: data});
    }else{
      res.render("404");
    }
  });
   
});



app.get("/news/keyword",function(req,res){
   let keywordResults = req.query.keyword;
   let url = "https://newsapi.org/v2/everything?language=en&q="+keywordResults+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30"; 
   request.get(url,function(error, response, body){
     if(!error && response.statusCode == 200){
         let data = JSON.parse(body);
         res.render("keyword", {data: data});
     }else{
       res.render("404");
     }
   });
});

app.get("/news/category", function(req,res){
  let categoryResult = req.query.category;
  let url = "https://newsapi.org/v2/top-headlines?country=ng&category="+categoryResult+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
  request.get(url,function(error, response, body){
    if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("category", {data: data});
    }else{
      res.render("404");
    }
  });
  app.get("/news/category/:title", function(req,res){
    let title = req.params.title;
    //let categoryResult = req.query.category;
    let url = "https://newsapi.org/v2/top-headlines?country=ng&category="+categoryResult+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
    request.get(url,function(error, response, body){
      if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("showcategory",{data:data, title:title});
  
  
      }else{
        res.render("404");
      }
    });
    
  });
});

app.get("/news/headlines/:title", function(req,res){
  let title = req.params.title;
  let url = "https://newsapi.org/v2/top-headlines?language=en&source!=reddit&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
  request.get(url,function(error, response, body){
    if(!error && response.statusCode == 200){
      let data = JSON.parse(body);
      res.render("showheadlines",{data:data, title:title});


    }else{
      res.render("404");
    }
  });  
 
});

app.get("/news/keyword/:title", function(req,res){
  let title = req.params.title;
  let keywordResults = req.query.keyword;
  let url = "https://newsapi.org/v2/everything?language=en&q="+keywordResults+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
  request.get(url,function(error, response, body){
    if(!error && response.statusCode == 200){
      let data = JSON.parse(body);
      res.render("showkeywords",{data:data, title:title});


    }else{
      res.render("404");
    }
  });
  
});



app.listen(4000, () => console.log('Newsify app listening on port 4000!'));