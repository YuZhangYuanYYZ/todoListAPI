import { todos } from "./todoData";
const express = require('express')
const app = express()
 
app.get('/todos', function (req, res) {
  res.send(todos);
})

app.delete('/todos/id',(req,res)=>)
 
app.listen(8080,()=>{
    console.log("server  start at port 8080");
});