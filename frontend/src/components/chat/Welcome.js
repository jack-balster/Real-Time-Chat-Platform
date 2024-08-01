/**
 * Welcome Component
 *
 * This component serves as a placeholder or introductory message to welcome users 
 * and prompt them to select a chat to start messaging. It includes a welcome SVG
 * illustration and a text message.
 */

import React from 'react';
import WelcomeSVG from '../../utils/WelcomeSVG';

const Welcome = () => {
  return (
    <div className="lg:col-span-2 lg:block bg-white dark:bg-gray-900">
      {/* Center the SVG illustration */}
      <div className="flex justify-center items-center h-full">
        <WelcomeSVG />
      </div>
      {/* Welcome message */}
      <div className="text-center">
        <h2 className="text-xl text-gray-500 dark:text-gray-400">
          Select a Chat to Start Messaging
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
