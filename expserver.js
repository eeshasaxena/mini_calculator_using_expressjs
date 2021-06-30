const express = require("express"); //require the express module; like include in cpp
const bodyParser = require("body-parser");

const app = express(); // calling express as a function to create it's object 'app'; like object and classes in java

app.use(bodyParser.urlencoded({extended:true}));// to parse values from index.html in textual format; middleware to handle post requests

// Routing ; / 
// using the get method (nothing on server -> Cannot GET /) / -> home/ index page;  getting something on index page
app.get("/", function(req, res){
    res.send("welcome eesha saxena");
});

//adding pages and using them; /page_name
app.get("/about", function(req, res){
    res.send("eesha saxena about us");
});

//adding one more page
app.get("/calc", function(req, res){
    // console.log("heya");
    res.sendFile(__dirname+"/index.html");
});

//post method 
app.post("/calc", function(req,res){
    // res.send("yeah it is working");

    console.log(req.body);// showcase form body values
    let n1= Number(req.body.v1);// req.body is a function of body-parser
    let n2= Number(req.body.v2);
    let sum=n1+n2;
    res.send("the sum is: "+sum);
})

// creating a server
app.listen(5000, function(req,res){ // callback a function which takes in a request(of running the server{localhost}) and sends a response to the terminal
    console.log("server is running on 5000");
    // console.log("is it");

});
