import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import allTodos from './selectors';

export default combineReducers({
  todos: todosReducer
});

// Create a rootReducer using combineReducers.
