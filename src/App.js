import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import Dashboard from './pages/main-dash/Dashboard'
import configureStore from './redux/configureStore'
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
