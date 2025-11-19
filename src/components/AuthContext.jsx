// src/components/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // ADD THIS: Check if user is authenticated
  const isAuthenticated = !!user;

  const login = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const signup = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  const logout = () => {
    setUser(null);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated, // ADD THIS LINE
        login,
        logout,
        openLogin,
        openSignup,
      }}
    >
      {children}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={login}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignup={signup}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
