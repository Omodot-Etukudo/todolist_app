import React, { Component } from "react";
import Todoitem from "./Todoitem";

class Todolist extends Component {
  render() {
    return (
      <div>
        <ul
          className="list-group list-group"
          style={{
            width: 650,
            left: 315,
            top: 300,
            position: "absolute",
            padding: 30
          }}
        >
          {this.props.todos.map(item => (
            <Todoitem todo={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
