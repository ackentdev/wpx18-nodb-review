import React from 'react';
import axios from 'axios';
import List from './components/List';
import AddToDo from './components/AddToDo';

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  componentDidMount(){
    axios.get('/api/todos').then( res => {
      this.setState({
        todos: res.data
      })
    })
  }

  deleteTodo(id){
    axios.delete(`/api/delete_todo/?id=${id}`).then(res => {
      this.setState({
        todos: res.data
      })
    })
}

  addToDo(){
    axios.post('/api/add_todo', {todo: this.state.newTodo}).then(res => {
      this.setState({
        todos: res.data,
        newTodo: ''
      })
    })
  }

  changeHandler(event){
    this.setState({
      newTodo: event.target.value
    })
  }



  render(){
    return (
      <div className="App">
        <AddToDo newTodo={this.state.newTodo} changeHandler={this.changeHandler} addToDo={this.addToDo}/>
        <List deleteTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
