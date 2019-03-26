import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/homeSaga';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga)
export default store;