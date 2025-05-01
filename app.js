const express = require("express");
const app = express();

require("./database/connection")

app.get("/books", (req,res)=>{

 res.json({
  message:"book is sucessfully fetched"

 }) 
})


app.post("/books", (ewq,res)=>{
   res.json({
      message:"book is sucessfullu uploaded"
   })
})



app.delete("/books/:id", (req,res)=>{
   res.json({
    message:"book is sucessfully deleted"
  
   }) 
  })


  app.patch("/books/:id", (req,res)=>{
   res.json({
    message:"book is sucessfully updated"
  
   }) 
  })
  
  
  
  

   


app.listen(4000,function() {
    console.log("server started at port number 4000");
})
