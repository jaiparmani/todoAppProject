import React, { Component } from "react";
import Todo from "./Todo.js";
import "bootstrap/dist/css/bootstrap.css";

class Todos extends Component {
  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            alignItems: "center",
            backgroundColor: "rgba(69, 66, 64, 0.37)",
          }}
        >
          {this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo}
              onComplete={this.props.onComplete}
              onDelete={this.props.onDelete}
            ></Todo>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
