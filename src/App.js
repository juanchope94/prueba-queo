import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import history from './history';
import Dashboard from './pages/main-dash/Dashboard'
import Login from './pages/login/login'
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import configureStore from './redux/configureStore'
import RequiredAuth from './components/protectedRoutes/protectedRoute';
import { PersistGate } from 'redux-persist/integration/react'
const {store , persistor } = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter history={history}>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={RequiredAuth(Dashboard)} />
          </BrowserRouter>
        </PersistGate>
      </Provider >
    );
  }
}

export default App;
