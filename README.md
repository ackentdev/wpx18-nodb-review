# WPX 18 NoDB Review
guidelines: https://docs.google.com/document/d/1_EZzVUEbb6lTleAK5oguE6ZaHg_ST4weIGxrNKOD67U/edit?usp=sharing
<hr/>

## Frontend Checklist

- reset.css
- change our title (in HTML)

### package-json setup
- add proxy
- add main

### dependencies
- axios

### folder structure
- src/
    - App.js => class component with state
    - components/
        - Button.js
        - ToDo.js
        - List.js
        - AddToDo.js

<hr/>

## Backend Checklist

### dependencies
 - express

### server folder structure
- server/
    - index.js
    - controller/
        - toDoController.js

### endpoints

- get: "/api/todos"
- post: "/api/add_todo"
- put: "/api/todo_update"
- delete: "/api/delete_todo"

### data
```js
// How will we structure our data?
{
    "id": 1,
    "todo": "Get eggs",
    "completed": false
}
```
