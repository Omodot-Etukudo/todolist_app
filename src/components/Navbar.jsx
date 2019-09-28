import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Todo List App</span>
        <input
          style={{
            width: 250,
            textAlign: "left",
            position: "absolute",
            right: 90
          }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </nav>
    );
  }
}

export default Navbar;
