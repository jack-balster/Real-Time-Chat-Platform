/**
 * App - Main application component
 *
 * This component sets up the routing and context providers for the application.
 * It uses React Router for navigation and AuthContext for authentication state management.
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom

import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider for authentication context
import Register from "./components/accounts/Register"; // Import Register component
import Login from "./components/accounts/Login"; // Import Login component
import Profile from "./components/accounts/Profile"; // Import Profile component
import WithPrivateRoute from "./utils/WithPrivateRoute"; // Import WithPrivateRoute component for protected routes
import ChatLayout from "./components/layouts/ChatLayout"; // Import ChatLayout component
import Header from "./components/layouts/Header"; // Import Header component
import ErrorMessage from "./components/layouts/ErrorMessage"; // Import ErrorMessage component

function App() {
  return (
    <AuthProvider> {/* Wrap the application with AuthProvider for authentication context */}
      <Router> {/* Setup the router */}
        <Header /> {/* Include the header */}
        <ErrorMessage /> {/* Include the error message component */}
        <Routes> {/* Define routes */}
          <Route exact path="/register" element={<Register />} /> {/* Route for the register page */}
          <Route exact path="/login" element={<Login />} /> {/* Route for the login page */}
          <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute> {/* Protected route for profile page */}
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute> {/* Protected route for main chat layout */}
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; // Export the App component as the default export
