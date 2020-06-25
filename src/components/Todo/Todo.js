import React, { useState } from 'react';
import './Todo.css';

const Todo = (props) => {

  const [name, setName] = useState(props.name);
  const [edit, setEdit] = useState(false)

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const handleShowEdit = () => {
    setEdit(true)
  }

  const handleUpdate = () => {
    props.update(props.index, props.id, name);
    setEdit(false)
  }
  let update = <React.Fragment>
    <input
      type="text"
      onChange={nameChangeHandler}
      value={name}
    />
    <button onClick={handleUpdate} >Save</button>

  </React.Fragment>


  return (<div className="Todo" >
    <h1>{props.name}</h1>
    {edit ? update : null}

    <button onClick={props.clicked}>Remove</button>
    <button onClick={handleShowEdit}>Edit</button>

  </div>)
};

export default Todo;