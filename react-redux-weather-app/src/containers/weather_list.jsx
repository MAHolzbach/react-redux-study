import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = cityData => {
    const city = cityData.city.name;
    return (
      <tr key={city}>
        <td>{city}</td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Conditions</th>
            <th>High (F)</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
