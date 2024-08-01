/**
 * WithPrivateRoute - Higher-order component for private routes
 *
 * This component ensures that only authenticated users can access certain routes.
 * If the user is authenticated, it renders the children components.
 * If the user is not authenticated, it redirects to the login page.
 */

import { Navigate } from "react-router-dom"; // Import the Navigate component from react-router-dom for redirection
import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook to access the current user

const WithPrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Get the current user from the AuthContext

  if (currentUser) {
    return children; // Render the children components if the user is authenticated
  }

  return <Navigate to="/login" />; // Redirect to the login page if the user is not authenticated
};

export default WithPrivateRoute; // Export the component as the default export
