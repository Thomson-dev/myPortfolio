"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaCog,
  FaLaptopCode,
} from "react-icons/fa";
import { useTheme } from "./theme/themeContext";
import { GoMoon, GoSun } from "react-icons/go";

const Navbar = () => {

  const { theme, handleToggleTheme } = useTheme();

  const tabs = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className=" w-full flex justify-between z-10 items-center  md:hidden  py-4">

        <button className="bg-[#78ABA8] p-2 rounded-full hover:opacity-80 transition-opacity">
          <FaLaptopCode className="text-lg text-white" />
        </button>




        <button
          onClick={handleToggleTheme}
          className="bg-[#78ABA8] p-2 rounded-full hover:opacity-80 transition-opacity"
        >
          {theme === "light" ? (
            <GoMoon className="text-lg text-white" />
          ) : (
            <GoSun className="text-lg text-white" />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
