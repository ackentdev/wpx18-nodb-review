import React from 'react';
import axios from 'axios';
import List from './components/List';

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/todos').then( res => {
      this.setState({
        todos: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
