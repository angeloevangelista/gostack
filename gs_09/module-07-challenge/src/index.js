import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './configuration/ReactotronConfig';

import store from './store';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Routes />
    </Provider>
  );
};

export default App;
