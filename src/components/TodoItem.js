import React, { useState } from 'react';
import '../App.css'

const TodoItem = ({ todo, deleteTodo, editTodo, updateTodo, editMode, editTodoId }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    console.log('EDIT')
    editTodo && editTodo(todo.id);
    
  };

  const handleUpdate = () => {
    if (editText.trim() !== '') {
      updateTodo && updateTodo(todo.id, editText);
    }
  };

  const handleDelete = () => {
    deleteTodo && deleteTodo(todo.id);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <li>
      {editMode && editTodoId === todo.id ? (
        <>
          <input type="text" value={editText} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
