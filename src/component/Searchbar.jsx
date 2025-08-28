import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <header
      className="bg-gradient-to-r from-gray-900/70 via-gray-800/70 to-gray-900/70 
                 h-28 px-6 md:px-12 rounded-b-3xl shadow-2xl flex items-center 
                 sticky top-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 w-full max-w-2xl mx-auto"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=" Search for your favorite movie..."
          className="flex-1 px-5 py-3 rounded-2xl border border-gray-600/50 
                     bg-gray-800/60 text-gray-200 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-yellow-400
                     shadow-inner backdrop-blur-md transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                     hover:from-yellow-500 hover:to-yellow-700 text-white 
                     px-6 py-3 rounded-2xl shadow-lg 
                     transition transform hover:scale-105 hover:shadow-yellow-500/40"
        >
          <FaSearch className="text-xl" />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
