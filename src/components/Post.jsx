import React, { Component } from "react";

class Post extends Component {
  state = {
    value: "",
    error: false
  };
  addtodo(e) {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      this.setState({ error: true });
      return;
    }
    this.props.newtodo(this.state.value);

    this.setState({ error: false });

    // console.log(this.state.value);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <form>
        <div
          className="input-group"
          style={{
            margin: "0 auto",
            marginTop: 60,
            // padding: 10,
            width: 750
          }}
        >
          <div className="input-group-prepend">
            <span class="input-group-text">INPUT POST</span>
          </div>
          <input
            onChange={this.handleChange.bind(this)}
            required
            class="form-control"
            value={this.state.value}
          />
        </div>
        <div
          style={{
            color: "red",
            visibility: this.state.error ? "visible" : "hidden",
            margin: "10px auto",
            display: "block",
            textAlign: "center"
          }}
        >
          Fill in the field
        </div>
        <button
          onClick={this.addtodo.bind(this)}
          type="submit"
          class="btn btn-primary"
          style={{
            width: 105,
            margin: "0 auto",
            display: "block"
          }}
        >
          Add to List
        </button>
      </form>
    );
  }
}

export default Post;
