"use client";
import React, { useEffect } from "react";
import profile from "@/app/assert/photo1.jpg";
import { LuAward } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa6";
import Image from "next/image";
import { GiGlassCelebration } from "react-icons/gi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

import { GrProjects } from "react-icons/gr";
import Link from "next/link";
//@ts-ignore
const Hero = ({ theme, handleToggleTheme }) => {
  console.log(handleToggleTheme);
  return (
    <div className="mt-2" id="About">
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={`flex md:flex-row flex-col  items-center rounded-xl bg-[#140C1C]  px-3  shadow border lg:p-14  py-12 ${
          theme == "dark" ? "bg-[#140C1C] border-[#261846] " : "bg-[#F6F3FC] "
        }`}
      >
        <div className="lg:w-[30%] sm:block hidden w-full">
          <Image
            src={profile}
            className="  w-full aspect-[1/1.2]  rounded-xl   "
            alt=""
          />
        </div>

        <div className="flex flex-col md:space-y-5 space-y-5 lg:w-[70%] w-full lg:px-10 md:px-6 ">
          <div className="lg:leading-relaxed leading-9">
            <h1
              className={`xl:text-6xl lg:text-5xl mt-5 text-grad text-[2rem] font-bold `}
            >
              Hi, I am Thomson
            </h1>
            <h1 className="xl:text-6xl lg:text-5xl text-grad   font-bold  text-[2rem] text-blue-500  sora">
              Software Developer
            </h1>
          </div>

          <div className="lg:w-[30%] sm:hidden block w-full">
            <Image
              src={profile}
              className=" max-w-[300px] mx-auto w-full aspect-[]  rounded-xl   "
              alt=""
            />
          </div>

          <p
            className={` text-lg  figtree   max-w-lg  ${
              theme == "dark" ? "text-[#DDDDDD]" : "text-black"
            }`}
          >
          I&apos;m a software engineer specializing in scalable web apps. Explore my blog, project portfolio and online resume.
          </p>

          <div className="flex sm:flex-row flex-col gap-7">
            <button className="w-fit px-4 bg-[#8750F7] text-white sora font-semibold py-4 rounded-full ">
              Download Resume
            </button>
            <div className="flex gap-5   items-center">
              <button className="border border-[#8750F7] rounded-full p-2">
                <Link target="_blank" href="https://github.com/Thomson-dev">
                  <FaGithub className="text-xl text-[#8750F7]" />
                </Link>
              </button>
              <button className="border border-[#8750F7] rounded-full p-2">
                <Link target="_blank" href="https://x.com/ThomsonOnyedika">
                  <FaTwitter className="text-xl text-[#8750F7]" />
                </Link>
              </button>

              <button className="border border-[#8750F7] rounded-full p-2">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/onyedikachi-thomson/"
                >
                  <FaLinkedinIn className="text-xl text-[#8750F7]" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className={`border mt-10 rounded-xl  shadow    py-12  xl:p-14  ${
          theme == "dark" ? "bg-[#140C1C] border-[#261846] " : "bg-[#F6F3FC] "
        } `}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-3 figtree gap-8  grid-cols-2 place-items-center justify-between   ">
          <div className="space-y-7 flex flex-col items-center ">
            <LuAward className="text-4xl text-center  text-[#5f38b5] " />
            <h1
              className={`xl:text-5xl text-xl figtree  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              14%
            </h1>
            <h5
              className={`xl:text-xl figtree lg:text-lg  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              Job achievements
            </h5>
          </div>

          <div className="space-y-7 flex flex-col items-center">
            <FaBriefcase className="text-4xl text-center  text-[#5f38b5]" />

            <h1
              className={`xl:text-5xl text-xl  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              50%
            </h1>
            <h5
              className={`xl:text-xl lg:text-lg  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              Years of Experience
            </h5>
          </div>

          <div className="space-y-7 mt-14 sm:mt-0  flex flex-col items-center">
            <GiGlassCelebration className="text-5xl text-center  text-[#5f38b5] " />
            <h1
              className={`xl:text-5xl text-xl  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              15K
            </h1>
            <h5
              className={`xl:text-xl text-lg ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              Happy Clients{" "}
            </h5>
          </div>

          <div className="space-y-7 mt-14 sm:mt-0 flex flex-col items-center">
            <GrProjects className="text-4xl text-center  text-[#5f38b5] " />
            <h1
              className={`xl:text-5xl text-xl  ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              14+
            </h1>
            <h5
              className={`xl:text-xl lg:text-lg ${
                theme == "dark" ? " text-white" : "text-[#8750F7]"
              } `}
            >
              Project Completed
            </h5>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
