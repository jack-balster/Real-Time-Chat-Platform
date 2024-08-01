/**
 * SearchUsers Component
 *
 * This component provides a search bar for filtering users. It includes an input field with
 * an icon and invokes the handleSearch function on input changes to update the search results.
 */

import { SearchIcon } from "@heroicons/react/solid";

export default function SearchUsers({ handleSearch }) {
  return (
    <div className="mx-3 my-3">
      <div className="relative">
        {/* Search icon positioned inside the input field */}
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <SearchIcon
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        </div>
        {/* Input field for searching users */}
        <input
          id="search"
          name="search"
          className="block py-2 pl-10 pr-3 w-full bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          placeholder="Search"
          type="search"
          onChange={(e) => handleSearch(e.target.value)} // Call handleSearch on input change
        />
      </div>
    </div>
  );
}
