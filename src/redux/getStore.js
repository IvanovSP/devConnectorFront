import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import initSagas from './initSagas';


const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

const getStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    defaultState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  initSagas(sagaMiddleware);

  return store;
};

export default getStore;
