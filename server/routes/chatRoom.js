// Import express to create the router
const express = require("express");
// Import the functions to handle creating and retrieving chat rooms
const { createChatRoom, getChatRoomOfUser, getChatRoomOfUsers } = require("../controllers/chatRoom.js");

// Create a new router instance
const router = express.Router();

// Route to handle creating a new chat room
// POST request to the root URL will call createChatRoom function
router.post("/", createChatRoom);

// Route to handle retrieving chat rooms of a specific user
// GET request with userId as a URL parameter will call getChatRoomOfUser function
router.get("/:userId", getChatRoomOfUser);

// Route to handle retrieving chat rooms between two specific users
// GET request with firstUserId and secondUserId as URL parameters will call getChatRoomOfUsers function
router.get("/:firstUserId/:secondUserId", getChatRoomOfUsers);

// Export the router for use in other parts of the application
module.exports = router;
