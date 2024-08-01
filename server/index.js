// Import required modules
const express = require("express"); // Express framework for handling HTTP requests
const cors = require("cors"); // Middleware for enabling CORS
const dotenv = require("dotenv"); // Module to load environment variables
const { Server } = require("socket.io"); // Socket.IO for real-time communication

// Connect to MongoDB
require("./config/mongo.js");

// Import middleware and routes
const { VerifyToken, VerifySocketToken } = require("./middlewares/VerifyToken.js");
const chatRoomRoutes = require("./routes/chatRoom.js");
const chatMessageRoutes = require("./routes/chatMessage.js");
const userRoutes = require("./routes/user.js");

// Create an Express application
const app = express();

// Load environment variables
dotenv.config();

// Use middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// Use token verification middleware for all routes
app.use(VerifyToken);

// Define port from environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Define API routes
app.use("/api/room", chatRoomRoutes); // Routes for chat rooms
app.use("/api/message", chatMessageRoutes); // Routes for chat messages
app.use("/api/user", userRoutes); // Routes for users

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Initialize Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  },
});

// Use token verification middleware for Socket.IO connections
io.use(VerifySocketToken);

// Global map to store online users
global.onlineUsers = new Map();

// Helper function to get key by value in a map
const getKey = (map, val) => {
  for (let [key, value] of map.entries()) {
    if (value === val) return key;
  }
};

// Handle Socket.IO connections
io.on("connection", (socket) => {
  global.chatSocket = socket;

  // Handle user addition
  socket.on("addUser", (userId) => {
    onlineUsers.set(userId, socket.id); // Add user to the online users map
    socket.emit("getUsers", Array.from(onlineUsers)); // Send the list of online users
  });

  // Handle sending messages
  socket.on("sendMessage", ({ senderId, receiverId, message }) => {
    const sendUserSocket = onlineUsers.get(receiverId); // Get the recipient's socket ID
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("getMessage", {
        senderId,
        message,
      });
    }
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    onlineUsers.delete(getKey(onlineUsers, socket.id)); // Remove user from the online users map
    socket.emit("getUsers", Array.from(onlineUsers)); // Send the updated list of online users
  });
});
