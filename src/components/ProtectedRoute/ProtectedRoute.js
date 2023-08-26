import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn === null) {
    return;
  }

  return loggedIn ? children : <Navigate to='/' />;
};

export default ProtectedRoute;