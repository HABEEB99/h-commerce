"use client";

import Cart from "./Cart";
import Logo from "./Logo";
import MobileSearchBar from "./MobileSearchBar";
import SearchBar from "./SearchBar";
import Themes from "./Themes";
import User from "./User";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[10vh] w-screen shadow-sm shadow-btn">
      <div className="wrapper w-full h-full flex items-center justify-between">
        <Logo />
        <SearchBar />
        <div className="flex items-center justify-center space-x-3">
          <Cart />
          <MobileSearchBar />
          <Themes />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
