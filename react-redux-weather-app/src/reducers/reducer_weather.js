import { FETCH_WEATHER } from "../actions/index";

const initialState = {
  data: [],
  meta: []
};

export function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log(action.payload.data);
      // console.log(action.meta.city);
      return {
        data: [action.payload.data, ...state.data],
        meta: [action.meta.city, ...state.meta]
      };
  }
  return state;
}
