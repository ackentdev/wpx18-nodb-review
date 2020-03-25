import React from 'react'

export default class AddToDo extends React.Component {

    render(){
        return(
            <div>
                <input
                type="text"
                name="newTodo"
                value={this.props.newTodo}
                onChange={(e) => this.props.changeHandler(e)}
                placeholder="Add new task..."
                />
                <button onClick={this.props.addToDo}>Add ToDo</button>
            </div>
        )
    }
}