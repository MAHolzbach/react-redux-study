import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: ""
    };
  }

  updateInput = event => {
    this.setState({
      formInput: event.target.value
    });
  };

  clearInput = e => {
    e.preventDefault();
    this.setState({ formInput: "" });
  };

  render() {
    return (
      <form action="" className="input-group" onSubmit={this.clearInput}>
        <input
          type="text"
          placeholder="Enter city..."
          className="form-control"
          onChange={this.updateInput}
          value={this.state.formInput}
        />
        <button type="submit" className="btn btn-primary">
          Search!
        </button>
      </form>
    );
  }
}
