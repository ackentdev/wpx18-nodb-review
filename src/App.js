import React from 'react';
import axios from 'axios';

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
    console.log(this.state)
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
