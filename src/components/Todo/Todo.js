import React, { useState } from 'react';
import './Todo.css';

import { Button, ListGroupItem } from 'react-bootstrap';

const Todo = (props) => {

  const [name, setName] = useState(props.name);
  const [edit, setEdit] = useState(false);
  const [hideBtns, setHideBtns] = useState(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const handleShowEdit = () => {
    setEdit(true);
    setHideBtns(false)

  }

  const handleUpdate = () => {
    props.update(props.index, props.id, name);
    setEdit(false);
    setHideBtns(true);

  }
  const hideButtons = () => {
    setHideBtns(false);
  }

  let update = <React.Fragment>
    <input
      type="text"
      onChange={nameChangeHandler}
      value={name}
    />

    <Button variant="success" size="sm" onClick={handleUpdate} >Save</Button> {' '}

  </React.Fragment>




  return (<div className="Todo" >

    <ListGroupItem onClick={hideButtons}>
      <h1>{props.name}</h1>

      {edit ? update : null}

      <Button variant="primary" size="sm" onClick={handleShowEdit}>Edit</Button>
      <Button variant="danger" size="sm" onClick={props.clicked}>Remove</Button>




    </ListGroupItem>


  </div>)
};

export default Todo;