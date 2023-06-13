import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter Task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;
