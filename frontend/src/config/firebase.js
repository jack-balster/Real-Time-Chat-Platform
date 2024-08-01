/**
 * Firebase Configuration and Initialization
 *
 * This file sets up the Firebase configuration using environment variables,
 * initializes the Firebase app, and exports the Firebase authentication module.
 */

import { initializeApp } from "firebase/app"; // Import Firebase app initialization function
import { getAuth } from "firebase/auth"; // Import Firebase authentication module

// Firebase configuration object using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Log the Firebase configuration for debugging purposes
console.log("Firebase Config:", {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize the Firebase authentication module
const auth = getAuth(app);

export default auth; // Export the Firebase authentication module for use in other parts of the application
