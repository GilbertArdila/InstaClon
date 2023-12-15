import React from "react";

const Search = () => {
  return (
    <div className="relative mt-1">
      <div className="absolute top-2 left-2">
        {/**icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black w-28 sm:w-72 lg:w-96"
      />
    </div>
  );
};

export default Search;
