import React from 'react';
import { Redirect } from 'react-router-dom';

const Authenticated = Component => props => (
  sessionStorage.getItem('isLoggedIn')
    ? <Component {...props} />
    : <Redirect to="/login" />
);


export const AlreadyAuthenticated = Component => props => (
  !sessionStorage.getItem('isLoggedIn')
    ? <Component {...props} />
    : <Redirect to="/getrecords" />
);

export default Authenticated;
