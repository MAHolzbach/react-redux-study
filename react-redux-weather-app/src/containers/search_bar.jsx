import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  updateCityInput = event => {
    this.setState({
      city: event.target.value
    });
  };

  updateStateNameInput = event => {
    this.setState({
      stateName: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();

    this.props.fetchWeather(this.state.city);

    this.setState({ city: "" });
  };

  render() {
    return (
      <form action="" className="input-group" onSubmit={this.formSubmit}>
        <input
          required
          type="text"
          placeholder="Enter city..."
          className="form-control"
          onChange={this.updateCityInput}
          value={this.state.city}
        />
        <button type="submit" className="btn btn-primary">
          Search!
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
