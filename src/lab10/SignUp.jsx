import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate(); // We'll use this to navigate after signup

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { email, password, role };
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert('User with this email already exists!');
      return;
    }

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users list to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // After successful signup, redirect the user to the signin page
    alert('User registered successfully!');
    navigate('/signin');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
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
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
