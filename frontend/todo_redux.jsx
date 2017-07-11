import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodos, receiveTodo} from './actions/todo_actions';
import { App } from './components/app';
import { Root } from './components/root';
// <h1>Todos App</h1>


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
	ReactDOM.render(
		<Root store={store}/>,
		document.getElementById('root')
	);
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;

});
