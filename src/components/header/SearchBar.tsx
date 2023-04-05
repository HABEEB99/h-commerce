"use client";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center justify-between h-10 w-96 rounded-full px-6 bg-slate-300 dark:bg-slate-100">
      <input
        type="text"
        placeholder="Search for a product"
        className="flex-1 outline-none h-full bg-slate-300 dark:bg-slate-100 rounded-l-full"
      />
      <FaSearch className="icon" />
    </div>
  );
};

export default SearchBar;
