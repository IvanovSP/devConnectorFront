import '@babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import getStore from './redux/getStore';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <div>Hello world</div>
  </Provider>, document.getElementById('dev-connector-app'),
);
