import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
