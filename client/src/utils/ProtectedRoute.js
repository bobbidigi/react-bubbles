import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function getToken(){
    return localStorage.getItem("token")
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? <Component {...props} /> : <Redirect to='/' />
    }
  />
);

export default PrivateRoute;
