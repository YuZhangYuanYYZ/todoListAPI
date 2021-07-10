import {
  Store
} from "./todoData.js";
import express from "express";
import bodyParser from "body-parser"
const app = express();
app.use(bodyParser.json());

const store = new Store();
app.get('/todos', function (req, res) {
  const todos = store.get();
  res.send(todos);
})

app.get('/todos/:id', function (req, res) {
  const id = Number(req.params.id);
  const todos = store.get();
  const todo = todos.filter(todo => {
    if (todo.id === id) {
      return todo
    }
  })
  res.send(todo);
})

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todos = store.get();
  store.delete(id);
  res.status(200).send();
})

app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const newContent = req.body;
  const todos = store.get();
  todos = todos.map(todo => {
    if (todo.id === id) {
      const newTodo = {
        ...todo,
        "content": newContent
      }
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

app.post('/todos', (req, res) => {
  const todos = store.get();
  const id = todos[todos.length - 1].id + 1;
  const content = req.body.content;
  let newTodo = {
    "content": content,
    "id": id
  }
  store.post(newTodo);
  res.send(newTodo)
})

app.listen(8080, () => {
  console.log("server  start at port 8080");
});