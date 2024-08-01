// Import the ChatMessage model
const ChatMessage = require("../models/ChatMessage.js");

// Function to create a new chat message
const createMessage = async (req, res) => {
  // Create a new instance of ChatMessage with the request body data
  const newMessage = new ChatMessage(req.body);

  try {
    // Save the new message to the database
    await newMessage.save();
    // Respond with the created message and a 201 status code
    res.status(201).json(newMessage);
  } catch (error) {
    // Handle any errors that occur during message creation
    res.status(409).json({
      message: error.message,
    });
  }
};

// Function to get all messages for a specific chat room
const getMessages = async (req, res) => {
  try {
    // Find all messages that belong to the specified chat room
    const messages = await ChatMessage.find({
      chatRoomId: req.params.chatRoomId,
    });
    // Respond with the found messages and a 200 status code
    res.status(200).json(messages);
  } catch (error) {
    // Handle any errors that occur during message retrieval
    res.status(409).json({
      message: error.message,
    });
  }
};

// Export the createMessage and getMessages functions
module.exports = { createMessage, getMessages };
