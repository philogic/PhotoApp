import {FETCH_PHOTOS} from "../actions/types"

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload;
    default:
      return state;
  }
}