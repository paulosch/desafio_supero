import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import './config/ReactotronConfig';
import store from './store';

import GlobalStyle from './styles/global';
import 'react-dropdown/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
