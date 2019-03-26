import * as constants from '../constants/constants';

const initialState = {
  data: [],
  fetching: false
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SIMPLE_ACTION:
      return { ...state, fetching: true}
    case constants.PUT_ACTION:
      return { ...state, data: action.data, fetching: false}
    default:
      return state;
  }
}
