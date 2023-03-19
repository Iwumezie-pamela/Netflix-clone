import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // sign up
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  } 

  // sign in
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // sign out
  function logOut() {
    return signOut(auth);
  }

  // on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AppContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
