import React, { useState } from 'react';

import './AddTodo.css';

const AddTodo = (props) => {

  const [todo, setTodo] = useState('');
  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  }

  const hadleTodoAdded = () => {
    props.todoAdded(todo);
    setTodo('');
  }

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Title"
        onChange={todoChangeHandler}
        value={todo} />

      <button onClick={hadleTodoAdded}>Add Todo</button>
    </div>
  );
}

export default AddTodo;