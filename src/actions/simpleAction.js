
import * as actions from "../constants/constants";

export const simpleAction = () => ({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
});


export const putAction = (data) => ({
  type: 'PUT_ACTION',
  data
});