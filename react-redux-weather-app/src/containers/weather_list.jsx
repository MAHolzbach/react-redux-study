import React, { Component } from "react";
import { connect } from "react-redux";

//TODO: This is gonna need a custom function to render the data. Container is only getting the forecast data, not the meta info because you can't call .map() on an object. A custom function is needed to fully parse the state object, both meta, and data attributes. Below code at this moment needs to be conditionally rendered. "data" is an empty array, and therefore undefined.

class WeatherList extends Component {
  renderWeather = cityData => {
    console.log(cityData);
    let renderedTable = null;
    if (cityData.data.length < 1) {
      renderedTable = <h1>Search for a city!</h1>;
    } else {
      const conditions =
        cityData.data.forecast.simpleforecast.forecastday[0].conditions;
      const fHigh =
        cityData.data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      renderedTable = (
        <tr>
          <td>{cityData.meta.city}</td>
          <td>{conditions}</td>
          <td>{fHigh}</td>
        </tr>
      );
    }
    return { renderedTable };
  };
  showMeta = metaData => {
    return <td>{metaData}</td>;
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
          {this.renderWeather(this.props.weather)}
          {/* {this.props.weather.data.map(this.renderWeather)}
          {this.showMeta(this.props.weather.meta)} */}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
