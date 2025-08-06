"use client";
import Image from "next/image";
import React from "react";
import profile from "@/app/assert/pic.png";
import {
  FaGithub,
  FaLaptopCode,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { GoMoon, GoSun } from "react-icons/go";
import { RiUserSettingsLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme/themeContext";

const Sidebar = () => {
  const { theme, handleToggleTheme } = useTheme();
  const currentPath = usePathname();

  const links = [
    {
      href: "About",
      label: "About",
      icon: <CiUser />,
      id: 2,
    },
    {
      href: "Skills",
      label: "Skills",
      icon: <RiUserSettingsLine />,
      id: 4,
    },
    {
      href: "Porfolio",
      label: "Porfolio",
      icon: <GrProjects />,
      id: 1,
    },
    {
      href: "Resume",
      label: "Resume",
      icon: <RiUserSettingsLine />,
      id: 5,
    },
    {
      href: "Contact",
      icon: <TiMessages />,
      label: "Contact",
      id: 5,
    },
  ];

  return (
    <aside className="w-[20rem] h-screen md:fixed hidden lg:block overflow-y-auto  custom-scrollbar  theme-bg-secondary">
      <nav className="flex  h-full ">
        <div className="sidebar-toggle-section space-y-5 flex flex-col  px-3 py-10">
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
        </div>
        <ul className="h-screen flex flex-col  pt-5 items-center flex-1 sidebar-main-section">
          <Image
            src={profile}
            className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg  theme-border hover:shadow-xl transition-all duration-300"
            alt="Thomson Dev Profile"
          />
          <div className="mt-3 px-4">
            <h3 className="text-center text-lg font-semibold theme-text-primary">
              Thomson Dev
            </h3>
            <span className="text-sm theme-text-secondary block text-center">
              Software Engineer
            </span>
            <div className="flex gap-3 justify-center mt-3 items-center">
              <button className="border theme-border rounded-full p-2 hover:theme-bg-accent hover:text-white transition-all">
                <a target="_blank" href="https://github.com/Thomson-dev">
                  <FaGithub className="text-base theme-accent" />
                </a>
              </button>
              <button className="border theme-border rounded-full p-2 hover:theme-bg-accent hover:text-white transition-all">
                <a target="_blank" href="https://x.com/ThomsonOnyedika">
                  <FaTwitter className="text-base theme-accent" />
                </a>
              </button>
              <button className="border theme-border rounded-full p-2 hover:theme-bg-accent hover:text-white transition-all">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/onyedikachi-thomson/"
                >
                  <FaLinkedinIn className="text-base theme-accent" />
                </a>
              </button>
            </div>
            <hr className="mt-6 theme-border" />
            <div className="flex flex-col gap-4 mt-5 pb-6">
              {links.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-150}
                  spy={true}
                  activeClass="theme-bg-accent text-white font-bold"
                  className="cursor-pointer p-3 hover:text-white hover:theme-bg-accent rounded-lg transition duration-200 theme-text-primary"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </div>
                </ScrollLink>
              ))}
            </div>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
