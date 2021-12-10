//in app.js 
var express = require("express"); 
var app = express(); 
//2 
app.get("/", function(req, res){ 
res.send("HELLO WORLD"); 
}); 
//3 
app.listen(3000, function(){ console.log("Application started and Listening on port 3000"); 
});
