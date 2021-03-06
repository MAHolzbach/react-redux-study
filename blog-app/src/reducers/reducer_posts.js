import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";
import mapKeys from "lodash/mapKeys";
import omit from "lodash/omit";

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, "id");
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return omit(state, action.payload);

    default:
      return state;
  }
}
