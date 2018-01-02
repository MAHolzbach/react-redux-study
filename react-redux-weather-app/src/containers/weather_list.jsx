import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = (weatherData, cityName) => {
    console.log(weatherData, cityName);
    let renderedTable;
    const tableMaker = weatherData => {
      console.log(weatherData);
      weatherData.forecast.simpleforecast.forecastday.forEach(day => {
        const conditions = day.conditions;
        const fHigh = day.high.fahrenheit;
        renderedTable = (
          <tr>
            <td>{cityName}</td>
            <td>{conditions}</td>
            <td>{fHigh}</td>
          </tr>
        );
      });
      return renderedTable;
    };
    if (weatherData.length < 1) {
      renderedTable = <h1>Search for a city!</h1>;
    } else {
      weatherData.map(tableMaker);
    }

    return renderedTable;
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
        <tbody>
          {this.renderWeather(this.props.weather.data, this.props.weather.meta)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
