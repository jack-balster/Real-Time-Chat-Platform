// Import required modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Get MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using the URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listener for successful connection
mongoose.connection.on("connected", () => {
  console.log("Mongo has connected successfully");
});

// Event listener for reconnection
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});

// Event listener for connection errors
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error);
  mongoose.disconnect();
});

// Event listener for disconnection
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});
