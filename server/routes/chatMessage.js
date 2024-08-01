// Import express to create the router
const express = require("express");
// Import the functions to handle creating and retrieving messages
const { createMessage, getMessages } = require("../controllers/chatMessage.js");

// Create a new router instance
const router = express.Router();

// Route to handle creating a new message
// POST request to the root URL will call createMessage function
router.post("/", createMessage);

// Route to handle retrieving messages for a specific chat room
// GET request with chatRoomId as a URL parameter will call getMessages function
router.get("/:chatRoomId", getMessages);

// Export the router for use in other parts of the application
module.exports = router;
