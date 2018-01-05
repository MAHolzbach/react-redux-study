import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  renderWeather = cityData => {
    const city = cityData.city.name;
    const temps = cityData.list.map(
      weather => 9 / 5 * (weather.main.temp - 273) + 32
    );
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const conditions = cityData.list[0].weather[0].main;
    return (
      <tr key={city}>
        <td>{city}</td>
        <td>{conditions}</td>
        <td>
          <Chart data={temps} color="orange" units="F" />
        </td>
        <td>
          <Chart data={humidity} color="black" units="%" />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Current Conditions</th>
            <th>Temperature (F)</th>
            <th>Humidity (%)</th>
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
