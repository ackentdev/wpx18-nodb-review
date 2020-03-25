import React from 'react';
import ToDo from './ToDo';
import Button from './Button';

export default function List(props){

    const mappedTodos = props.todos.map( elem => {
        return <div key={elem.id}>
            <ToDo todo={elem.todo}/>
            <Button/>
        </div>
    })

    return <div>
        <h1>Adam's Todo List</h1>
        {mappedTodos}
    </div>
}