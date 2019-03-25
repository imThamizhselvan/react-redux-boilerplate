import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call('https://api.myjson.com/bins/kez8a', action.payload.userId);
      yield put({type: "SIMPLE_ACTION", user: user});
   } catch (e) {
      yield put({type: "SIMPLE_ACTION", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* sampleSaga() {
  yield takeEvery("SIMPLE_ACTION", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("SIMPLE_ACTION", fetchUser);
}

export default sampleSaga;