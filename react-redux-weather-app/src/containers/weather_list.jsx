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
        {/* <td>{cityData.city}</td> */}
        <td>{cityData.meta.city}</td>
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
            <th>Conditions</th>
            <th>High (F)</th>
            <th>Humidity</th>
          </tr>
        </thead>
        {/* <tbody>{this.props.weather.map(this.renderWeather)}</tbody> */}
        <tbody>{this.props.weather.data.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
