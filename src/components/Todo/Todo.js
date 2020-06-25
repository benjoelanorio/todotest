import React, { useState } from 'react';
import './Todo.css';

const Todo = (props) => {

  const [name, setName] = useState(props.name);

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }


  return (<div className="Todo" >
    <h1>{props.name}</h1>
    <input
      type="text"
      onChange={nameChangeHandler}
      value={name}
    />

    <button onClick={props.clicked}>Remove</button>
    <button onClick={() => props.update(props.index, props.id, name)} >Update</button>
  </div>)
};

export default Todo;