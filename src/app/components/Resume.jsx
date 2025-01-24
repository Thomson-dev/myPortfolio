import React from "react";
import profile from "@/app/assert/photo1.jpg";
import Image from "next/image";
import Experience from "./Experience";
import { motion } from "framer-motion";
const Resume = ({ theme }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      id="Resume"
      className=" "
    >
      <div className="text-center max-w-[1250px] w-[97%] mx-auto  py-7 my-16">
        <h1 className="md:text-3xl text-2xl font-bold">Online Resume</h1>

        <button className="bg-[#8750F7] hover:bg-blue-700 text-base text-white rounded-full font-bold py-3 px-4  mt-5">
          <a
            href="/myResume.pdf"
            download
            className=""
          >
            Download PDF Version
          </a>
        </button>

        <div className="shadow-sm bg-[#FAFAFA] py-16 md:px-7 px-3 mt-20 border w-full rounded-3xl ">
          <div className="flex md:justify-between flex-col md:flex-row md:items-center">
            <div className=" flex flex-col  items-start">
              <h1 className="md:text-5xl text-2xl text-[#8750F7] font-semibold">
                Thomson Onyedikachi
              </h1>
              <span className="text-gray-900 text-lg mt-2 font-semibold">
                Software Engineer
              </span>
            </div>

            <div className="border-l-2 mt-4 border-gray-300 h-32">
              <div className="flex flex-col space-y-3 items-start pl-4">
                <a href="tel:01234567890" className="text-gray-900 text-base">
                  09159163256
                </a>
                <a
                  href="mailto:Evans@yourwebsite.com"
                  className="text-gray-900 text-base"
                >
                  tomsinonyedikachi@gmail.com
                </a>

                <span className="text-gray-900 text-base">Nigeria</span>
              </div>
            </div>
          </div>

          <hr className=" mt-9" />

          <div className="flex  flex-col md:flex-row items-start  my-9">
            <div className="w-full flex justify-center h-full">
              <Image
                src={profile}
                className="   object-contain md:w-[15rem] rounded-lg w-[18rem] h-[18rem]  md:h-[15rem]   "
                alt=""
              />
            </div>
            <div className="">
              <p className="md:text-lg text-base mt-4 text-left leading-relaxed text-[#717171] ">
                Highly motivated and experienced full-stack developer with a
                strong passion for designing, developing, and deploying
                scalable, efficient, and reliable web applications. With a solid
                foundation in computer science and software engineering, I
                possess expertise in a range of technologies, including
                front-end, back-end, databases, and operating systems.
              </p>
            </div>
          </div>

          <hr />

          <div className="flex items-center justify-between ">
            <Experience />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
