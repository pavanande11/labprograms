import { Navigate } from 'react-router-dom';

// PrivateRoute component that checks the user's role and authentication
function PrivateRoute({ user, role, children }) {
  // Check if the user is logged in and has the correct role
  if (!user || user.role !== role) {
    return <Navigate to="/home" />;
  }

  // If the user is authenticated and has the correct role, render the children
  return children;
}

export default PrivateRoute;