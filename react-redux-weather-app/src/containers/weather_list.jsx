import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = cityData => {
    console.log(cityData);
    let renderedTable;
    const tableMaker = cityData => {
      console.log(cityData);
      cityData.forecast.simpleforecast.forecastday.forEach(day => {
        const conditions = day.conditions;
        const fHigh = day.high.fahrenheit;
        renderedTable = (
          <tr>
            <td>{cityData.meta}</td>
            <td>{conditions}</td>
            <td>{fHigh}</td>
          </tr>
        );
      });
      return renderedTable;
    };
    if (cityData.data.length < 1) {
      renderedTable = <h1>Search for a city!</h1>;
    } else {
      cityData.data.map(tableMaker);
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
        <tbody>{this.renderWeather(this.props.weather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
