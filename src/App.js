import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import history from './history';
import Dashboard from './pages/main-dash/Dashboard'
import Login from  './pages/login/login'
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import configureStore from './redux/configureStore'
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
        <Route exact path="/" render={()=><Redirect to="/login"/>}/>
        <Route path="/login" component={Login}/>
        <Route path="/Dashboard" component={Dashboard}/>

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
