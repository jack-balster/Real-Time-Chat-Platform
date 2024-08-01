/**
 * GenerateAvatar - Generates avatars using the DiceBear API
 *
 * This file contains functions to generate avatar URLs from different styles provided by the DiceBear API.
 * It includes functions for generating avatars in the styles of Avataaars, Bottts, and Gridy.
 */

// Function to generate an avatar URL using the DiceBear Avataaars style
const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`;

// Function to generate an avatar URL using the DiceBear Bottts style
const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${seed}`;

// Function to generate an avatar URL using the DiceBear Gridy style
const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${seed}`;

// Function to generate an array of avatar URLs
export const generateAvatar = () => {
  const data = []; // Initialize an array to hold the avatar URLs

  // Generate two avatars using the Avataaars style and add them to the array
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random().toString(36).substring(7));
    data.push(res);
  }
  // Generate two avatars using the Bottts style and add them to the array
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random().toString(36).substring(7));
    data.push(res);
  }
  // Generate two avatars using the Gridy style and add them to the array
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearGridy(Math.random().toString(36).substring(7));
    data.push(res);
  }
  return data; // Return the array of avatar URLs
};
