import './App.css';
import React, { Component } from 'react'
import TodoList  from "./pages/TodoList";
import Count from "./components/Count/index"

class App extends Component {
  render(){
      return (
          <div>
            <TodoList/>
            <Count/>
          </div>
      )
  }
}

export default App;
