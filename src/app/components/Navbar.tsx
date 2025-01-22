"use client";

import React, { useEffect, useState } from "react";
import logo from "../assert/logo-dark.png";
import Image from "next/image";
// import Link from "next/link";
//@ts-ignore
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import { RiMenu3Fill } from "react-icons/ri";
import { GoSun } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};
//@ts-ignore
const Navbar = ({ theme, handleToggleTheme }) => {
  const links = [
    // {
    //   href: "https://example.com/page1",
    //   label: "Home",
    //   id: 1,
    // },
    {
      href: "About",
      label: "About",
      id: 2,
    },
    {
      href: "Porfolio",
      label: "Porfolio",
      id: 1,
    },
    {
      href: "Skills",
      label: "Skills",
      id: 4,
    },
    {
      href: "Resume",
      label: "Resume",
      id: 5,
    },
    {
      href: "Contact",
      label: "Contact",
      id: 6,
    },
    // Add more links as needed
  ];

  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScroll(true);
          console.log("scrolling");
        } else {
          setScroll(false);
         
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
    }
  }, []);

  return (
    <div
      className={` relative lg:max-w-full md:max-w-[1000px] mx-auto lg:hidden flex justify-between w-full items-center  ${
        scroll
          ? ` sticky top-0 bg-[#050709] py-3 shadow-md px-4 duration-500 z-50 ease-out ${
              theme === "dark" ? "bg-[#050709] " : "bg-white"
            }`
          : "xl:px-20 px-5 py-9"
      }  `}
    >
      <div className="flex  items-center ">
        {/* <Image
          src={logo}
          alt="Your image description"
          className="max-w-[50px] h-auto"
        /> */}
        <a href="" className="md:pl-8">
          <h3
            className={`text-base sora hidden lg:block text-slate-950  hover:text-[#8750f7] duration-500 ${
              theme == "dark" ? "text-white" : "text-[#2A1454]"
            }`}
          >
            tomsinonyedikachi@gmail.com
          </h3>
        </a>
      </div>
      

      <div
        className={`lg:flex md:flex-row flex-col hidden  xl:space-x-16 space-x-6  text-base  justify-between  sora ${
          theme == "dark" ? "text-white" : "text-[#2A1454]"
        } `}
      >
        {links.map((link) => {
          return (
            <Link key={link.id}  className ='cursor-pointer'  offset={-150}  smooth={true} duration={500} to={link.href} >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile */}
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: open ? "100vh" : 0 }}
        transition={{ duration: open ? 0.5 : 1 }}
        className={`flex  flex-col lg:hidden  ${
          scroll ? " top-[5.6rem]" : "top-[7rem] "
        }   space-y-9 items-center  text-white   absolute w-full bg-[#2A1454] left-0  sora  ${
          open ? " h-[100vh] pt-7  " : "h-[0rem] hidden"
        }  `}
      >
        {links.map((link) => {
          return (
            <Link
              className={`text-xl cursor-pointer font-semibold ${open ? 'block': 'hidden'} `}
              key={link.id}  offset={-150}  smooth={true} duration={500} to={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </motion.ul>
      <div className="flex items-center space-x-3">
        {/* <button
          onClick={handleToggleTheme}
          className={`text-2xl ${
            theme == "dark" ? "text-white" : "text-[#2A1454]"
          }`}
        >
          <GoSun />
        </button> */}
        <button className="py-3 w-36  bg-[#8750F7] font-bold rounded-full text-white ">
          Resume
        </button>

        {open ? (
          <FaTimes
            className="text-3xl  lg:hidden block  text-[#8750F7]"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <RiMenu3Fill
            className="text-3xl lg:hidden block  text-[#8750F7] "
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
