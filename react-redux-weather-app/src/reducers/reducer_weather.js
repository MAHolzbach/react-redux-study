import { FETCH_WEATHER } from "../actions/index";

export function WeatherReducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log(action.payload.data);
      console.log(action.payload[1]);
      return [action.payload.data, ...state];
  }
  return state;
}
