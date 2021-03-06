import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo_items: [],
      task: ""
    };
  }

  handleTaskChange = e => {
    this.setState({task: e.target.value});
  };

  handleAddTodoSubmit = e => {
    e.preventDefault();
    const todos = this.state.todo_items.slice();
    todos.push({task: this.state.task, id: Date.now(), completed: false});
    this.setState({todo_items: todos});
  };

  addLineThrough = id => {
    let todos = this.state.todo_items.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    
    this.setState({ todos });

  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList addLineThrough={this.addLineThrough} todos={this.state.todo_items}/>
        <TodoForm
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
        />
      </div>
    );
  }
}

export default App;
