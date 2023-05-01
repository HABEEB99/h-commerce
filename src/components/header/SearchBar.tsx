"use client";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center justify-between h-10 w-96 rounded-lg pl-4 bg-slate-300 dark:bg-slate-100 overflow-hidden border-btn">
      <input
        type="text"
        placeholder="Search for a product"
        className="flex-1 outline-none h-full bg-slate-300 dark:bg-slate-100 rounded-l-full text-gray-700"
      />
      <div className="h-full w-16 flex items-center justify-center bg-btn rounded-r-lg">
        <FaSearch className="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
