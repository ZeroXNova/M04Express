//required imports
const express = require("express");

//activate server
const app = express();
const router = express.Router();


//start server - app.listen(portnumber,function)
app.listen(3000,function(){
    console.log('listening on port 3000');
});

//make api using routes
//routes handle browser requests but look like URLs. Functions are used to dynamically handle routes

//GET or regular request when user goes to http://localhost:3000/hello.
app.get("/hello", function(req, res){
    res.send("<h1>Hello Express!</h1>");
});
app.get("/goodbye", function(req, res){
    res.send("<h1>Goodbye Express!</h1>");
});

