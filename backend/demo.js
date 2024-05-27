const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
var app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>{console.log("data connected")})
.catch(()=>{console.log("data failed")})
// createmodel
var fruit=mongoose.model("fruit",
  {
    name:String
  },"fruit")
app.listen("5000",function()
{
  console.log("server start")
})
app.get("/fruitlist",function(req,res)
{
  fruit.find().then(function(retdata)
  {
    res.send(retdata)
  })
})
app.post("/savefruit",function(req,res)
{

  var newfruit=req.body.newfruit
const todolist= new fruit(
  {
    name:newfruit
  }
);
todolist.save().then(function(){console.log(todolist)})
.catch(function(){console.log("undsaved")})
}
)

