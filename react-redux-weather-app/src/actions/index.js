import axios from "axios";

const API_KEY = "e95fb12f6c69ae61";
const ROOT_URL = `http://api.wunderground.com/api/${API_KEY}/forecast/q/`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(searchData) {
  const url = `${ROOT_URL}${searchData.stateName}/${searchData.city}.json`;
  const request = axios.get(url);

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
