import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div>
        <header
          style={{
            padding: "1%",
            backgroundColor: "black",
            width: "100%",
            fontStyle: "bold",
            textAlign: "center",
            alignItems: "center",
          }}
          className="lead"
        >
          <button
            style={{}}
            className="btn btn-secondary"
            style={{ float: "right" }}
            onClick={() => this.props.onInsert(this.refs.insertTodo.value)}
          >
            Insert Todo
          </button>
          <span style={styleForLogo}>
            Your Todos
            <input
              ref="insertTodo"
              type="text"
              style={{ float: "right" }}
              placeholder="Add Todo..."
              name="todoInput"
            ></input>
          </span>
        </header>
      </div>
    );
  }
}
let styleForLogo = {
  color: "white",
  backgroundColor: "black",
};
//wanted to use media queries so as to bring the logo to the left("YOUR TODOS") for smaller screens ie phones

export default Navigation;
