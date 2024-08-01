// Import necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main CSS file for the application
import "./index.css";
// Import the main App component
import App from "./App";

// Create a root element for React to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within React's StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
