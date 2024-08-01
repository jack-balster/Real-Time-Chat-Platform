// Import express to create the router
const express = require("express");
// Import the functions to handle retrieving user data
const { getAllUsers, getUser } = require("../controllers/user.js");

// Create a new router instance
const router = express.Router();

// Route to handle retrieving all users
// GET request to the root URL will call getAllUsers function
router.get("/", getAllUsers);

// Route to handle retrieving a specific user by userId
// GET request with userId as a URL parameter will call getUser function
router.get("/:userId", getUser);

// Export the router for use in other parts of the application
module.exports = router;
