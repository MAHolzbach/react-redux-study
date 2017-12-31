import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = cityData => {
    const conditions =
      cityData.forecast.simpleforecast.forecastday[0].conditions;
    const fHigh =
      cityData.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    return (
      <tr>
        <td>{cityData.city}</td>
        <td>{conditions}</td>
        <td>{fHigh}</td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
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
