import React, { Component } from "react";
import Post from "./Post";
import Todolist from "./Todolist";
import Navbar from "./Navbar";
import uuid from "uuid";
class Wrapper extends Component {
  state = { todos: ["todo 1", "todo 2", "todo 3"] };

  handleNewtodo(newitem) {
    const todos = this.state.todos;
    todos.push(newitem);

    this.setState({ todos: todos });

    console.log(this.state.todos);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Post newtodo={this.handleNewtodo.bind(this)} />
        <Todolist todos={this.state.todos} />
      </React.Fragment>
    );
  }
}

export default Wrapper;
