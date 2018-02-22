import React from 'react';
import { Provider } from 'mobx-react';
import configureStore from './store/index';

import App from './route/index';

const store = new configureStore();




const Root = () => (
  <Provider rootstore={store}>
    <App />
  </Provider>
);

export default Root;