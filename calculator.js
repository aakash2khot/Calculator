//jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//body Paser has few modes such as bodyPaser.json, bodyPaser.text

//the home page
app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

// app.post("/", function(req, res){
//
//   var num1 = Number(req.body.num1);
//   var num2 = Number(req.body.num2);
//   //num1 and num2 comes from index.html
//
//   var  result = num1 + num2;
//
//   res.send("The result is "+ result);
// });

// For Addition page
app.get("/add", function(req,res){
  res.sendFile(__dirname+"/add.html");
});

app.post("/add", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  //num1 and num2 comes from index.html

  var  result = num1 + num2;

  res.send("The result is "+ result);
});

// For Subtraction page
app.get("/subtract", function(req,res){
  res.sendFile(__dirname+"/subtract.html");
});

app.post("/subtract", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  //num1 and num2 comes from index.html

  var  result = num1 - num2;

  res.send("The result is "+ result);
});

// For Multiplication page
app.get("/multiply", function(req,res){
  res.sendFile(__dirname+"/multiply.html");
});

app.post("/multiply", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  //num1 and num2 comes from index.html

  var  result = num1*num2;

  res.send("The result is "+ result);
});

// For Division page
app.get("/divide", function(req,res){
  res.sendFile(__dirname+"/divide.html");
});

app.post("/divide", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  //num1 and num2 comes from index.html

  var  result = num1/num2;

  res.send("The result is "+ result);
});
// for BMI Calculator page
app.get("/BMIcalculator", function(req,res){
  res.sendFile(__dirname+ "/BMIcalculator.html");
});

app.post("/BMIcalculator", function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var bmi = weight/(height*height);

  res.send("Your BMI is "+bmi);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
