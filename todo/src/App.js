import React from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
