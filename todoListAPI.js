import {todos}  from "./todoData.js";
import  express  from "express";
const app = express()
app.get('/todos', function (req, res) {
  res.send(todos);
})

app.get('/todos/:id', function (req, res) {
  const id = Number(req.params.id);
  const todo = todos.filter(todo=>{
    if(todo.id === id){
      return todo
    }
  })
  res.send(todo);
})

app.delete('/todos/:id',(req,res)=>{
  const id = Number(req.params.id);
  const newTodos = todos.filter(todo=>todo.id!==id);
  todos = newTodos;
  res.send({}) ;
})

app.put('/todos/:id',(req,res)=>{
  const id = Number(req.params.id);
  const newContent = req.body;
  const todos = todos.map(todo=>{
    if(todo.id === id){
      const newTodo = {...todo,"content":newContent}
      return newTodo;
    }
    return todo;
  })
  const resTodo = todos.find(todo => todo.id === id);
  if (resTodo === []) {
    res.status(404).send("出错了！");
  } else {
    res.send(resTodo);
  }
})

app.post('/todos',(req,res)=>{
  const id = todos[todos.length-1].id + 1;
  const content = req.body;
  console.log(req,req.body,"req.body")
  newTodo ={"content":content,"id":id}
  todos = [...todos,newTodo];
  res.send(newTodo)
})

app.listen(8080,()=>{
    console.log("server  start at port 8080");
});



