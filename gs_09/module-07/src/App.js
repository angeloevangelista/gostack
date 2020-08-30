import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './configuration/ReactotronConfig';

import store from './store';

import Header from './components/Header';

import history from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router history={history}>
          <ToastContainer limit={3000} />
          <Header />
          <Routes />
          <GlobalStyle />
        </Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
