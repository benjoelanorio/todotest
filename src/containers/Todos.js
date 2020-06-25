import React from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo/Todo';
import AddPerson from '../components/AddTodo/AddTodo';

import * as actionTypes from '../store/actions';

const Todos = (props) => {
  return (
    <div>
      <AddPerson personAdded={props.onAddedTodo} />
      {props.todoState.map((todo, index) => (
        <Todo
          key={todo.id}
          name={todo.name}
          clicked={() => props.onRemovedTodo(todo.id)}
          update={props.onUpdate}
          id={todo.id}
          index={index}
        />

      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todoState: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedTodo: (name) => dispatch({ type: actionTypes.ADD_TODO, todoData: { todo: name } }),
    onRemovedTodo: (id) => dispatch({ type: actionTypes.REMOVE_TODO, todoId: id }),
    onUpdate: (index, id, name) => dispatch({ type: actionTypes.UPDATE_TODO, todoData: { index: index, id: id, todo: name } })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);