import React from "react";

const SearchBox = ({ showSearchBox, searchPlayer, setSearchPlayer, handleSearchPlayer }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        showSearchBox ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <input
        type="text"
        placeholder="Search NFL characters..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
        onChange={(e) => setSearchPlayer(e.target.value)}
      />
      <button
        onClick={handleSearchPlayer}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;