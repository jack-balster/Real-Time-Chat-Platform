// Import mongoose to define the schema and model
const mongoose = require("mongoose");

// Define the schema for chat messages
const ChatMessageSchema = mongoose.Schema(
  {
    // The ID of the chat room to which the message belongs
    chatRoomId: String,
    // The ID of the user who sent the message
    sender: String,
    // The message content
    message: String,
  },
  // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields
  { timestamps: true }
);

// Create the ChatMessage model using the defined schema
const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

// Export the ChatMessage model for use in other parts of the application
module.exports = ChatMessage;
