/**
 * ChatService - Handles all chat-related API requests and socket connections
 *
 * This file contains functions for making API requests related to users, chat rooms,
 * and messages. It also includes a function to initiate a socket connection.
 */

import axios from "axios"; // Import axios for making HTTP requests
import auth from "../config/firebase"; // Import Firebase authentication module
import { io } from "socket.io-client"; // Import socket.io-client for real-time communication

const baseURL = "http://localhost:3001/api"; // Base URL for the API

// Function to get the current user's token
const getUserToken = async () => {
  const user = auth.currentUser; // Get the current authenticated user
  const token = user && (await user.getIdToken()); // Get the user's token
  return token;
};

// Function to initiate a socket connection
export const initiateSocketConnection = async () => {
  const token = await getUserToken(); // Get the user token

  // Initialize socket connection with token for authentication
  const socket = io("http://localhost:3001", {
    auth: {
      token,
    },
  });

  return socket; // Return the socket instance
};

// Function to create headers for API requests
const createHeader = async () => {
  const token = await getUserToken(); // Get the user token

  // Create headers with the token for authorization
  const payloadHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader; // Return the headers
};

// Function to get all users
export const getAllUsers = async () => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(`${baseURL}/user`, header); // Make GET request to get all users
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to get a specific user by user ID
export const getUser = async (userId) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(`${baseURL}/user/${userId}`, header); // Make GET request to get the user
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to get multiple users
export const getUsers = async (users) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(`${baseURL}/user/users`, users, header); // Make GET request to get multiple users
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to get chat rooms for a specific user
export const getChatRooms = async (userId) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(`${baseURL}/room/${userId}`, header); // Make GET request to get chat rooms
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to get a chat room for two specific users
export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(
      `${baseURL}/room/${firstUserId}/${secondUserId}`,
      header
    ); // Make GET request to get the chat room
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to create a new chat room
export const createChatRoom = async (members) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.post(`${baseURL}/room`, members, header); // Make POST request to create chat room
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to get messages of a specific chat room
export const getMessagesOfChatRoom = async (chatRoomId) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header); // Make GET request to get messages
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};

// Function to send a message
export const sendMessage = async (messageBody) => {
  const header = await createHeader(); // Create headers

  try {
    const res = await axios.post(`${baseURL}/message`, messageBody, header); // Make POST request to send message
    return res.data; // Return the response data
  } catch (e) {
    console.error(e); // Log any errors
  }
};
