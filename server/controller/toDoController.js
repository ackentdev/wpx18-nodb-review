const todos = require('../../db.json')
let num = 6;

module.exports = {
    getTodos: (req, res, next) => {
        res.status(200).send(todos)
    },
    addTodo: (req, res,next) => {
        const newTodo = {
            id: num,
            todo: req.body.todo,
            completed: false
        }
        todos.push(newTodo)
        num++
        res.status(200).send(todos)
    },
    updateTodo: (req, res,next) => {
        const index = todos.findIndex((elem) => {
            return elem.id == req.params.id
        })
        todos[index].todo = req.body.todo
        res.status(200).send(todos)
    },
    deleteTodo: (req, res,next) => {
        const index = todos.findIndex((elem) => {
            return elem.id == req.params.id
        })
        todos.splice(index, 1)
        res.status(200).send(todos)
    }
}