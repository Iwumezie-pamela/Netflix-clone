import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AuthContext';
// protect route so user wont have access when they are not logged in
const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
