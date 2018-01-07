import React, { Component } from "react";
import SearchBar from "../containers/search_bar.jsx";
import WeatherList from "../containers/weather_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  sendCityName = city => {
    this.setState({
      city
    });
  };

  render() {
    return (
      <div>
        <SearchBar sendCityName={this.sendCityName} />
        <WeatherList citySearched={this.state.city} />
      </div>
    );
  }
}

export default App;
