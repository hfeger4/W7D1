import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';


export default combineReducers({
  todos: todosReducer
});

// Create a rootReducer using combineReducers.
