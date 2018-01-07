import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/Map";

class WeatherList extends Component {
  renderWeather = cityData => {
    if (!cityData) {
      return <h3>We couldn't find that town. Try again!</h3>;
    } else {
      const city = cityData.city.name;
      const temps = cityData.list.map(
        weather => 9 / 5 * (weather.main.temp - 273) + 32
      );
      const humidity = cityData.list.map(weather => weather.main.humidity);
      const conditions = cityData.list[0].weather[0].main;
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={city}>
          <td>
            <GoogleMap lon={lon} lat={lat} />
          </td>
          <td>{conditions}</td>
          <td>
            <Chart data={temps} color="orange" units="F" />
          </td>
          <td>
            <Chart data={humidity} color="black" units="%" />
          </td>
        </tr>
      );
    }
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

WeatherList.defaultProps = {
  cityData: {
    city: {
      name: "New York",
      coord: {}
    },
    list: []
  }
};

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
