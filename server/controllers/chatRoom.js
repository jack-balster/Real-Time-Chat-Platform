// Import the ChatRoom model
const ChatRoom = require("../models/ChatRoom.js");

// Function to create a new chat room
const createChatRoom = async (req, res) => {
  // Create a new instance of ChatRoom with members from the request body
  const newChatRoom = new ChatRoom({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    // Save the new chat room to the database
    await newChatRoom.save();
    // Respond with the created chat room and a 201 status code
    res.status(201).json(newChatRoom);
  } catch (error) {
    // Handle any errors that occur during chat room creation
    res.status(409).json({
      message: error.message,
    });
  }
};

// Function to get all chat rooms of a specific user
const getChatRoomOfUser = async (req, res) => {
  try {
    // Find all chat rooms where the user is a member
    const chatRoom = await ChatRoom.find({
      members: { $in: [req.params.userId] },
    });
    // Respond with the found chat rooms and a 200 status code
    res.status(200).json(chatRoom);
  } catch (error) {
    // Handle any errors that occur during chat room retrieval
    res.status(404).json({
      message: error.message,
    });
  }
};

// Function to get a chat room of two specific users
const getChatRoomOfUsers = async (req, res) => {
  try {
    // Find a chat room where both users are members
    const chatRoom = await ChatRoom.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    // Respond with the found chat room and a 200 status code
    res.status(200).json(chatRoom);
  } catch (error) {
    // Handle any errors that occur during chat room retrieval
    res.status(404).json({
      message: error.message,
    });
  }
};

// Export the createChatRoom, getChatRoomOfUser, and getChatRoomOfUsers functions
module.exports = { createChatRoom, getChatRoomOfUser, getChatRoomOfUsers };
