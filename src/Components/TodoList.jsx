import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  const handleAddTodo = () => {
    const heading = headingInput.trim();
    if (heading !== '') {
      setTodos((prev) => [...prev, { heading, lists: [] }]);
      setHeadingInput('');
    }
  };

  const handleDeleteTodo = (index) => {
   const newTodos = [...todos];
   newTodos.splice(index, 1);
   setTodos(newTodos);
  };


  const handleAddList = (index) => {
   if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
