"use client";

import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";

const Themes = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSunFill
          onClick={() => setTheme("light")}
          className="cursor-pointer text-yellow-400 hover:text-yellow-500 text-xl"
        />
      );
    } else {
      return (
        <FaMoon
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-gray-400 hover:text-gray-500 text-xl"
        />
      );
    }
  };
  return <div>{toggleTheme()}</div>;
};

export default Themes;
