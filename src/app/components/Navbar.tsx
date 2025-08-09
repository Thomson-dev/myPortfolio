"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBlog,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import { useTheme } from "./theme/themeContext";
import { GoMoon, GoSun } from "react-icons/go";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";

const NavItem = ({ href, icon: Icon, text }: { href: string; icon: any; text: string }) => (
  <Link 
    href={href}
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#78ABA8]/10 transition-all duration-300 theme-text-primary"
  >
    <Icon className="text-xl text-[#78ABA8]" />
    <span>{text}</span>
  </Link>
);

const ResourceSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase">{title}</h3>
    <div className="mt-3 space-y-1">
      {children}
    </div>
  </div>
);

const Navbar = () => {
  const { theme, handleToggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button - Always visible on mobile */}
      <button
        onClick={toggleNav}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg theme-bg-card theme-border block md:hidden"
      >
        {isOpen ? (
          <MdClose className="text-2xl text-[#78ABA8]" />
        ) : (
          <MdMenu className="text-2xl text-[#78ABA8]" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 block md:hidden"
          onClick={toggleNav}
        />
      )}

      {/* Navigation - Only visible on mobile */}
      <nav className={`
        fixed top-0 left-0 z-40 w-[280px] h-screen 
        theme-bg-card border-r theme-border
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#78ABA8] p-2 rounded-full">
              <FaLaptopCode className="text-xl text-white" />
            </div>
            <span className="text-lg font-semibold theme-text-primary">Thomson Dev</span>
          </div>
          {/* Close button inside nav */}
          <button onClick={toggleNav} className="md:hidden">
            <MdClose className="text-2xl text-[#78ABA8]" />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 mt-8 space-y-1 p-4">
          {/* <NavItem href="/" icon={FaHome} text="Home" /> */}
          <NavItem href="/about" icon={FaUser} text="About" />
          <NavItem href="/projects" icon={FaLaptopCode} text="Projects" />
          <NavItem href="/contact" icon={MdEmail} text="Contact" />
        </div>

        {/* Resources Section */}
        <div className="p-4">
          <ResourceSection title="RESOURCES">
            <NavItem href="/blog" icon={FaBlog} text="Blog" />
            <NavItem href="/stack" icon={FaCode} text="Stack" />
            <NavItem href="/social" icon={FaGlobe} text="Social" />
          </ResourceSection>
        </div>

        {/* Theme Toggle */}
        <div className="mt-auto p-4 border-t theme-border">
          <button
            onClick={handleToggleTheme}
            className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-[#78ABA8]/10 transition-all duration-300 theme-text-primary"
          >
            {theme === "light" ? (
              <>
                <GoMoon className="text-xl text-[#78ABA8]" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <GoSun className="text-xl text-[#78ABA8]" />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;