import React, { Component } from "react";

class Todoitem extends Component {
  state = {};

  render() {
    return (
      <div>
        <li className="list-group-item">
          <input
            type="checkbox"
            style={{ position: "absolute", right: 45, top: 6, zoom: 2.0 }}
          ></input>
          {this.props.todo}
          <button
            type="button"
            className="btn btn-danger"
            style={{
              position: "absolute",
              right: 10,
              bottom: 5
            }}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default Todoitem;
