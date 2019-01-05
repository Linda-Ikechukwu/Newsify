const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


//ROUTES

app.get("/", (req,res) =>{
  res.redirect("/news");
});

app.get("/404", (req,res) =>{
  res.render("404");
});

app.get("/news", (req, res)=>{
  let url = "https://newsapi.org/v2/top-headlines?language=en&source!=reddit&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=99";
  request.get(url,(error,response,body)=>{
    if(!error && response.statusCode == 200){
      let data = JSON.parse(body);
      res.render("home", {data: data});
    }else{
      res.render("404");
    }
  });
  app.get("/news/:title", (req,res)=>{
    let title = req.params.title;
    request.get(url,(error, response, body)=>{
      if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("show",{data:data, title:title});
  
  
      }else{
        res.render("404");
      }
    });  
   
  }); 
});



app.get("/news/keyword",(req,res)=>{
   let keywordResults = req.query.keyword;
   let url = "https://newsapi.org/v2/everything?language=en&q="+keywordResults+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=100"; 
   request.get(url,(error, response, body)=>{
     if(!error && response.statusCode == 200){
         let data = JSON.parse(body);
         res.render("keyword", {data: data});
     }else{
       res.render("404");
     }
   });
   app.get("/news/keyword/:title", (req,res)=>{
    let title = req.params.title;
    request.get(url,(error, response, body)=>{
      if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("show",{data:data, title:title});
  
  
      }else{
        res.render("404");
      }
    });
    
  });
});

app.get("/news/category", (req,res)=>{
  let categoryResult = req.query.category;
  let url = "https://newsapi.org/v2/top-headlines?country=ng&category="+categoryResult+"&apiKey=9b2406747cdb42a4bccfa4a7967da150&pageSize=30";
  request.get(url,(error, response, body)=>{
    if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("category", {data: data});
    }else{
      res.render("404");
    }
  });
  app.get("/news/category/:title", (req,res)=>{
    let title = req.params.title;
    request.get(url,(error, response, body)=>{
      if(!error && response.statusCode == 200){
        let data = JSON.parse(body);
        res.render("show",{data:data, title:title});
  
  
      }else{
        res.render("404");
      }
    });
    
  });1
});







app.listen(4000, () => console.log('Newsify app listening on port 4000!'));