const express=require("express");
const app=express();
const cors = require('cors');
const mongoose=require("mongoose");
const bodyparser = require('body-parser')

const sturoute=require("./Routes/stuRoute");



mongoose.connect("mongodb://127.0.0.1:27017/revcrude").then((res)=>{
    console.log("db connect ");
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


// Enable CORS for all routes
app.use(cors());

app.use("/student",sturoute)

app.listen(8080,()=>{
    console.log("server run on 8080");
});