// Import the Firebase authentication module
const auth = require("../config/firebase-config.js");

// Function to get all users
const getAllUsers = async (req, res) => {
  const maxResults = 10; // Maximum number of users to retrieve
  let users = [];

  try {
    // List users from Firebase authentication
    const userRecords = await auth.listUsers(maxResults);

    // Process each user record
    userRecords.users.forEach((user) => {
      const { uid, email, displayName, photoURL } = user;
      users.push({ uid, email, displayName, photoURL });
    });

    // Send the list of users as a response
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    // Send an error response if any error occurs
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

// Function to get a single user by ID
const getUser = async (req, res) => {
  try {
    // Get user record from Firebase authentication using user ID
    const userRecord = await auth.getUser(req.params.userId);

    const { uid, email, displayName, photoURL } = userRecord;

    // Send the user data as a response
    res.status(200).json({ uid, email, displayName, photoURL });
  } catch (error) {
    console.log(error);
    // Send an error response if any error occurs
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

// Export the getAllUsers and getUser functions
module.exports = { getAllUsers, getUser };
