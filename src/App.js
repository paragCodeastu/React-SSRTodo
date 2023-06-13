import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
