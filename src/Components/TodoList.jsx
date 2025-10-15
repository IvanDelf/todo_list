import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // State Initialization
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  // Function to Add Heading
  const handleAddTodo = () => {
    const heading = headingInput.trim();
    if (heading !== '') {
      setTodos((prev) => [...prev, { heading, lists: [] }]);
      setHeadingInput('');
    }
  };

  // Function to Delete Heading
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Function to Add List Item
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };

  // Function to Handle List Input Change
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
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          {/* CRITICAL FIX 1: Added onClick handler to the Add Heading button */}
          <button 
            className="add-list-button"
            onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      
      <div className="todo_main">
        {/* START OF PRIMARY MAPPING LOOP */}
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            
            {/* Display Heading and Delete Button */}
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}>
                Delete Heading
              </button>
            </div>

            {/* Display Todo List Items */}
            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className='todo_inside_list'>
                  <p>{list}</p>
                </li>
              ))}
            </ul>

            {/* Input and Button to Add List */}
            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add list"
                value={listInputs[index] || ''}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button 
                className='add-list-button' 
                onClick={() => handleAddList(index)}>
                Add List
              </button>
            </div>
            
          </div> // CLOSES todo-card
        ))} {/* CLOSES PRIMARY MAPPING LOOP */}
      </div>
    </>
  );
};

export default TodoList;