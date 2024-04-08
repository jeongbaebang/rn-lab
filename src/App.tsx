import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Router from './screens/Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
