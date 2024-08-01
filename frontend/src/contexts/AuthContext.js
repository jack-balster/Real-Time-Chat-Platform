/**
 * AuthContext - Provides authentication context for the application
 *
 * This file sets up the authentication context using Firebase, providing functions
 * for registering, logging in, logging out, and updating user profiles. It also
 * manages the current user state and any authentication errors.
 */

import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "../config/firebase"; // Import Firebase authentication module

// Create authentication context
const AuthContext = createContext();

// Custom hook to use the authentication context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to provide authentication context to its children
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(); // State for the current user
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(""); // State for error messages

  // Function to register a new user with email and password
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered successfully:", userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setError(error.message);
        throw error;
      });
  }

  // Function to log in a user with email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to log out the current user
  function logout() {
    return signOut(auth);
  }

  // Function to update the user's profile
  function updateUserProfile(user, profile) {
    return updateProfile(user, profile);
  }

  // Effect to set up an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Update current user state
      setLoading(false); // Set loading state to false
    });

    return unsubscribe; // Clean up subscription on unmount
  }, []);

  // Context value to provide to the children components
  const value = {
    currentUser,
    error,
    setError,
    login,
    register,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
}
