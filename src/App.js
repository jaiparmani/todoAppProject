import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos.js";
import Navigation from "./components/navigation.js";

class App extends React.Component {
  state = {
    todos: [
      { completed: true, message: "Complete Project", id: "1" },
      { completed: false, message: "Complete two Project", id: "2" },
    ],
  };
  handleComplete = (todoId) => {
    const todos = [...this.state.todos];
    console.log("Hello:");
    // for (var i in todos) {
    // console.log(i + "" + i.id);
    // if (i.id == todoId) console.log(i.message);
    // }
    todos[todoId - 1].completed = !todos[todoId - 1].completed;
    // todos[todoId].completed = !todos[todoId].completed;
    console.log(todos);
    this.setState({ todos });
  };
  handleDelete = (todoId) => {
    console.log("Hello from delete");
    console.log(todoId);
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos });
  };
  handleInsert = (todoMessage) => {
    const todos = [...this.state.todos];
    todos.push({
      message: todoMessage,
      completed: false,
      id: todos.length + 1,
    });
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <Navigation onInsert={this.handleInsert} />
        <Todos
          todos={this.state.todos}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
