import { takeLatest, call, put, all } from "redux-saga/effects";
import * as constants from "../constants/constants";
import { putAction } from "../actions/homeAction";
import request from '../utils/request';


export const fetchMovies = () => {
  return { hello: 'true' }
}
export function* watcherSaga() {
  yield all([
    takeLatest(constants.SIMPLE_ACTION, loadMovies),
  ]);
}

function* loadMovies(data) {
  const requestUrl = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const movies = yield call(request, requestUrl);
    yield put(putAction(movies))
  } catch(error) {
    console.log('error');
  }
}

