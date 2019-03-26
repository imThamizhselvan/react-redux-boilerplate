import { takeLatest, call, put, all } from "redux-saga/effects";
import * as constants from "../constants/constants";
import { putAction } from "../actions/simpleAction";

export const fetchMovies = () => {
  return { hello: 'true' }
}
export function* watcherSaga() {
  yield all([
    takeLatest(constants.SIMPLE_ACTION, loadMovies),
  ]);
}

function* loadMovies(data) {
  console.log('sagas');
  try {
    console.log('before');
    const movies = yield call("https://api.myjson.com/bins/kez8a");
    console.log('movies', movies);
    yield put(putAction(movies))
  } catch(error) {

  }
}

