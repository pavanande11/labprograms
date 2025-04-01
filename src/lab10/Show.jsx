import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Admin from './Admin';
import PrivateRoute from './PrivateRoute';


function Show() {
    const [user, setUser] = useState(null);

  // Check if user is logged in and retrieve from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Logout function to clear user from localStorage
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />

          {/* Protect the Admin route */}
          <Route
            path="/admin"
            element={
              <PrivateRoute user={user} role="admin">
                <Admin />
              </PrivateRoute>
            }
          />

          {/* Redirect to sign-in if no path matches */}
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Show;