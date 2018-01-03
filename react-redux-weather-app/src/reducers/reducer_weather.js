import { FETCH_WEATHER } from "../actions/index";

export function WeatherReducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
