const express= require ('express');
const app= express();
const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
app.get('/scanProduct', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: "product1", price:"1.00", vendorid:"vendor1" }));
})
app.post('/productAdd', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: "product1", price:"1.00", vendorid:"vendor1" }));
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("app is running");
})