import React from 'react';
import { uniqueId } from '../../utils/idGenerator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
  return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input onChange ={this.update('title')} value={this.state.title} ref="title">

          </input>
        </label>
        <label>Body:
          <textarea onChange ={this.update('body')} value={this.state.body} ref="body">

          </textarea>
        </label>
        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
