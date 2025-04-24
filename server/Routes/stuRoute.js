const express=require("express");
const myRoute=express.Router();
const stucontroller=require("../controllers/stucontroller")



myRoute.post("/datasave",stucontroller.mydatasave);

myRoute.get("/datashow",stucontroller.datadisplay);

myRoute.post("/search",stucontroller.mysearch);

myRoute.get("/deletedatashow",stucontroller.deletedatashow);

myRoute.post("/deletedata",stucontroller.deldata);

myRoute.get("/editshow",stucontroller.editshow);

myRoute.post("/editsave",stucontroller.editsave);

module.exports=myRoute;