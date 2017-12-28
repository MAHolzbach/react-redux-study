import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <form action="" className="input-group">
        <input type="text" placeholder="Enter city..." />
        <button type="submit" className="btn btn-primary">
          Search!
        </button>
      </form>
    );
  }
}
