import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  // Check if user is authenticated
  const isAuthenticated = user !== null;

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        {/* If the user is not authenticated, show Sign In and Sign Up */}
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/signin" style={{ color: 'white' }}>Sign In</Link>
            </li>
            <li>
              <Link to="/signup" style={{ color: 'white' }}>Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            {/* Always show Home link to authenticated users */}
            <li>
              <Link to="/home" style={{ color: 'white' }}>Home</Link>
            </li>

            {/* Show Admin link if the user is an Admin */}
            {user.role === 'admin' && (
              <li>
                <Link to="/admin" style={{ color: 'white' }}>Admin</Link>
              </li>
            )}
          </>
        )}
      </ul>

      {/* Logout Button on the right */}
      {isAuthenticated && (
        <button 
          onClick={logout} 
          style={{
            backgroundColor: '#f44336', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '4px'
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
