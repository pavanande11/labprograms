import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // We'll use this to navigate after login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the matching email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Store the user data in state
      setUser(user);

      // Store the user data in localStorage to persist the session
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect based on user role
      navigate(user.role === 'admin' ? '/admin' : '/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Sign In</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
