// Import the Firebase authentication module
const auth = require("../config/firebase-config.js");

// Middleware to verify token for HTTP requests
const VerifyToken = async (req, res, next) => {
  // Extract token from authorization header
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Verify the token with Firebase authentication
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      // If token is valid, attach user info to request object
      req.user = decodeValue;
      return next();
    }
  } catch (e) {
    // Handle errors during token verification
    return res.json({ message: "Internal Error" });
  }
};

// Middleware to verify token for WebSocket connections
const VerifySocketToken = async (socket, next) => {
  // Extract token from socket handshake auth
  const token = socket.handshake.auth.token;

  try {
    // Verify the token with Firebase authentication
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      // If token is valid, attach user info to socket object
      socket.user = decodeValue;
      return next();
    }
  } catch (e) {
    // Handle errors during token verification
    return next(new Error("Internal Error"));
  }
};

// Export the middleware functions
module.exports = { VerifyToken, VerifySocketToken };
