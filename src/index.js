import '@babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import getStore from './redux/getStore';
import App from '@/scenes/App';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('dev-connector-app'),
);
