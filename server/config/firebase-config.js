// Import the necessary Firebase Admin SDK functions
const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const serviceAccountKey = require("./serviceAccountKey.json");

// Initialize the Firebase app with the service account key
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

// Get the authentication instance from the initialized app
const auth = getAuth(app);

// Export the authentication instance for use in other parts of the application
module.exports = auth;
