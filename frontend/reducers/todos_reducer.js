import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';


const _defaultState  = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = _defaultState, action) => {
// debugger;
let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return _defaultState;
    }
};

export default todosReducer;
