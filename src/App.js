import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';
import './App.scss';
import './Assets/Css/PortalTheme.css';

const Loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const Login = loadable(() => import('./Pages/Authentication/LoginPage'), { LoadingComponent: Loading });
const DefaultLayout = loadable(() => import('./containers'), { LoadingComponent: Loading });

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {localStorage.getItem('token') ? null : <Route path="/login" name="Login" component={Login} />}
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
