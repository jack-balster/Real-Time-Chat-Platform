/**
 * UserLayout Component
 *
 * This component displays a user's avatar, name, and online status.
 * The user's online status is indicated by a small green or gray dot.
 */

export default function UserLayout({ user, onlineUsersId }) {
  return (
    <div className="relative flex items-center">
      {/* User's avatar */}
      <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
      {/* User's display name */}
      <span className="block ml-2 text-gray-500 dark:text-gray-400">
        {user?.displayName}
      </span>
      {/* Online status indicator */}
      {onlineUsersId?.includes(user?.uid) ? (
        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-500 dark:bg-green-400 border-2 border-white rounded-full"></span>
      ) : (
        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-gray-400 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
}
