import * as actionTypes from './actions';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: Math.random(),
        name: action.todoData.todo

      }
      return {
        ...state,
        todos: state.todos.concat(newTodo)
      }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todoId)
      }
    case actionTypes.UPDATE_TODO:
      const updated = {
        id: action.todoData.id,
        name: action.todoData.todo

      }

      const index = action.todoData.index;
      return {
        ...state.todos.splice(index, 1, updated),
        todos: state.todos.filter(todo => todo.id !== action.todoId)
      }
    default: return state
  }

};

export default reducer;