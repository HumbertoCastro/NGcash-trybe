import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Register from './pages/Register';

function App() {
  return (
    <Provider>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/home" component={ HomePage } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
