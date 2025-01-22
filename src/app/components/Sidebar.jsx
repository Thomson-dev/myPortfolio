"use client";
import Image from "next/image";
import React from "react";
import profile from "@/app/assert/photo1.jpg";
import { GiGlassCelebration } from "react-icons/gi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { GoSun } from "react-icons/go";
import { RiUserSettingsLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();

  console.log(currentPath);

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
    <aside className="w-[20rem] h-screen  md:fixed  hidden lg:block   Overflow-y-auto border-r-4 border-[#8750F7] ">
      <nav className="flex gap-3 bg-[#FAFAFA] h-full   p-2">
        <div className=" bg-white py-7 p-4 w-14">
          {/* <button className="bg-[#8750F7] p-2 text-white rounded-full">
            <GoSun className="text-lg" />
          </button> */}
        </div>
        <ul className=" h-screen flex flex-col mt-7 items-center flex-1 ">
          <Image
            src={profile}
            className="   object-contain w-[9rem]  h-[9rem]  rounded-full  "
            alt=""
          />
          <div className="mt-3">
            <h3 className="text-center text-lg font-semibold">Thomson Dev</h3>
            <span className="text-sm">Mid level Software Engineer</span>
            <div className="flex gap-5 justify-center mt-2  items-center">
              <button className="border border-[#8750F7] rounded-full p-2">
                <a target="_blank" href="https://github.com/Thomson-dev">
                  <FaGithub className="text-base text-[#8750F7]" />
                </a>
              </button>
              <button className="border border-[#8750F7] rounded-full p-2">
                <a target="_blank" href="https://x.com/ThomsonOnyedika">
                  <FaTwitter className="text-base text-[#8750F7]" />
                </a>
              </button>
              <button className="border border-[#8750F7] rounded-full p-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/onyedikachi-thomson/"
                >
                  <FaLinkedinIn className="text-base text-[#8750F7]" />
                </a>
              </button>
            </div>
            <hr className="mt-9" />
            <div className="flex flex-col gap-6 mt-5">
              {links.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-150}
                  spy={true} // Adds scroll spying
                  activeClass="bg-[#8750F7] text-white font-bold" // Active class for current section
                  className="cursor-pointer p-2 hover:text-white hover:bg-[#8750F7] rounded-md transition duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
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
