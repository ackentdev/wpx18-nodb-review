const express = require('express');
// import controller folder
const {getTodos, addTodo, updateTodo, deleteTodo} = require('./controller/toDoController')

const app = express()

app.use(express.json());

// GET
app.get('/api/todos', getTodos)
// POST
app.post('/api/add_todo', addTodo)
// PUT
app.put('/api/update_todo/:id', updateTodo)
// DELETE
app.delete('/api/delete_todo/:id', deleteTodo)

const port = 4040;

app.listen(port, () => {console.log(`listening on port ${port}`)})