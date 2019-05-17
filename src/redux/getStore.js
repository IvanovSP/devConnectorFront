import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
// import initSagas from './initSagas';


const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

const getStore = () => {
  const store = createStore(
    reducers,
    defaultState,
    compose(
      applyMiddleware(sagaMiddleware),
    ),
  );

  // initSagas(sagaMiddleware);

  return store;
};

export default getStore;
