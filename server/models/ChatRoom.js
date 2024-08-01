// Import mongoose to define the schema and model
const mongoose = require("mongoose");

// Define the schema for chat rooms
const ChatRoomSchema = mongoose.Schema(
  {
    // Array of members in the chat room
    members: Array,
  },
  // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields
  { timestamps: true }
);

// Create the ChatRoom model using the defined schema
const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

// Export the ChatRoom model for use in other parts of the application
module.exports = ChatRoom;
