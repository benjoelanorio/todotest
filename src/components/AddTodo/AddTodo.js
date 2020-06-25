import React, { useState } from 'react';

import './AddTodo.css';

const AddTodo = (props) => {

  const [todo, setTodo] = useState('');
  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  }

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Title"
        onChange={todoChangeHandler}
        value={todo} />

      <button onClick={() => props.personAdded(todo)}>Add Todo</button>
    </div>
  );
}

export default AddTodo;