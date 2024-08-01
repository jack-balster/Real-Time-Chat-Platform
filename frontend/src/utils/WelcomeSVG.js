/**
 * WelcomeSVG - Displays a welcome SVG image
 *
 * This component renders a welcome SVG image that is displayed to users as part of the application's welcome message.
 */

import React from 'react';

// Component to render the welcome SVG image
const WelcomeSVG = () => (
  <img 
    src="/welcome.svg" // Path to the SVG image in the public directory
    alt="Welcome" // Alternative text for the image
    style={{ width: '65%', height: 'auto' }} // Style to set the image width and maintain aspect ratio
  />
);

export default WelcomeSVG; // Export the component as the default export
