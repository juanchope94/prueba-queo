import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import Dashboard from './pages/main-dash/Dashboard'
import Login from  './pages/login/login'
import configureStore from './redux/configureStore'
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
