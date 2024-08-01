/**
 * Message Component
 *
 * This component displays a chat message with formatting based on whether the message
 * is sent by the current user or received from another user. It also shows the time 
 * the message was sent in a human-readable format using the timeago.js library.
 */

import { format } from "timeago.js";

// Utility function to join class names conditionally
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Message({ message, self }) {
  return (
    <>
      <li
        className={classNames(
          self !== message.sender ? "justify-start" : "justify-end", // Align message based on sender
          "flex"
        )}
      >
        <div>
          <div
            className={classNames(
              self !== message.sender
                ? "text-gray-700 dark:text-gray-400 bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700" // Styling for received messages
                : "bg-blue-600 dark:bg-blue-500 text-white", // Styling for sent messages
              "relative max-w-xl px-4 py-2 rounded-lg shadow"
            )}
          >
            <span className="block font-normal ">{message.message}</span> {/* Display the message text */}
          </div>
          <span className="block text-sm text-gray-700 dark:text-gray-400">
            {format(message.createdAt)} {/* Display the message timestamp */}
          </span>
        </div>
      </li>
    </>
  );
}
