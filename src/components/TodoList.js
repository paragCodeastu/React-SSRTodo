import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
console.log(newTodo)
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditMode(true);
    setEditTodoId(id);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditMode(false);
    setEditTodoId(null);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            updateTodo={updateTodo}
            editMode={editMode}
            editTodoId={editTodoId}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
