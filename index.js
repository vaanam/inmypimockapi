const express= require ('express');
const app= express();
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: "product1", price:"1.00", vendorid:"vendor1" }));
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("app is running");
})