import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Todo extends Component {
  state = {
    todos: this.props.todo,
  };
  render() {
    return (
      <div className="container">
        <input
          type="checkbox"
          defaultChecked={this.props.todo.completed}
          onChange={() => this.props.onComplete(this.props.todo.id)}
          // onClick={this.props.onComplete(this.props.todo.id)}
          // onClick={this.props.}
        />
        <span>{this.props.todo.id}</span>
        <span
          style={{
            textDecoration: this.props.todo.completed
              ? "line-through"
              : "underline",
          }}
          className="lead"
        >
          {this.props.todo.message}
        </span>
        <button
          style={{ float: "right", marginBottom: "" }}
          onClick={() => this.props.onDelete(this.props.todo.id)}
        >
          <span className="fa fa-remove"></span>
        </button>
        <p></p>
      </div>
    );
  }
}

export default Todo;
