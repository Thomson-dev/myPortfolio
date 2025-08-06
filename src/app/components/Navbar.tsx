"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";
import { useTheme } from "./theme/themeContext";
import { GoMoon, GoSun } from "react-icons/go";

const Navbar = () => {
  const { theme, handleToggleTheme } = useTheme();


  return (
    <nav className="w-full flex justify-between items-center px-6 py-3  md:hidden bg-opacity-80 backdrop-blur-lg theme-bg-card z-10">
      {/* Left: Logo/Button */}
      <button className="bg-[#78ABA8] p-2 rounded-full hover:scale-105 transition-transform shadow-md">
        <FaLaptopCode className="text-lg text-white" />
      </button>



      {/* Right: Theme Toggle */}
      <button
        onClick={handleToggleTheme}
        className="bg-[#78ABA8] p-2 rounded-full hover:scale-105 transition-transform shadow-md"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <GoMoon className="text-lg text-white" />
        ) : (
          <GoSun className="text-lg text-white" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;