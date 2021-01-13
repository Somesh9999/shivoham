const express= require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const app= express();

mongoose.connect("mongodb+srv://somesh:pMgs6O2AaXJlJsbM@cluster0.immmq.mongodb.net/shivoham?retryWrites=true&w=majority").then(()=>{
  console.log("Connected Successfully");
}).catch(()=>{
  console.log("Connection Failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With , Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();

});

app.use("/start",(req,res,next)=>{
  res.status(200).json({message:"Sever Started"});
})

module.exports=app;
