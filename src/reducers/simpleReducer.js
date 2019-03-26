import * as constants from '../constants/constants';
import * as actions from '../actions/simpleAction';

const initialState = {
  loading: false,
  movies: [],
  pagination: 1
}

export default function simpleReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SIMPLE_ACTION:
    return { ...state, fetching: true}
    case constants.PUT_ACTION:
      return { ...state, movies: action.data}
    default:
      return state;
  }
}
