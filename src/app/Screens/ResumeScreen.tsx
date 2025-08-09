import React from "react";
import profile from "@/app/assert/photo1.jpg";
import Image from "next/image";
import Experience from "../components/Experience";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0, scale: 0.96 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      id="Resume"
      className="py-10 px-2 sm:px-6 md:px-10 lg:px-0 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#e0e7ef] dark:from-[#181924] dark:via-[#23243a] dark:to-[#181924] transition-colors"
    >
      <div className="max-w-4xl w-full mx-auto bg-white/90 dark:bg-[#181924]/80 shadow-2xl rounded-3xl py-10 px-4 sm:px-10 border border-gray-100 dark:border-[#23243a] transition-colors">
        <h1 className="text-2xl sm:text-3xl font-bold text-center theme-text-primary mb-2">
          <span className="inline-block bg-gradient-to-r from-[#8750F7] to-[#78ABA8] bg-clip-text text-transparent">
            Online Resume
          </span>
        </h1>
        <div className="flex justify-center mt-2">
          <a
            href="/myResume.pdf"
            download
            className="bg-gradient-to-r from-[#8750F7] to-[#78ABA8] hover:from-[#78ABA8] hover:to-[#8750F7] text-white rounded-full font-semibold py-2 px-6 text-sm sm:text-base shadow-md transition-all"
          >
            Download PDF Version
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-10">
          <div className="flex flex-col items-start">
            <h2 className="text-xl sm:text-3xl font-semibold text-[#8750F7] dark:text-[#78ABA8]">
              Thomson Onyedikachi
            </h2>
            <span className="text-gray-900 dark:text-gray-200 text-base sm:text-lg mt-2 font-semibold">
              Software Engineer
            </span>
          </div>
          <div className="border-l-2 border-gray-200 dark:border-[#23243a] pl-4 mt-4 md:mt-0">
            <div className="flex flex-col space-y-2">
              <a
                href="tel:09159163256"
                className="text-gray-900 dark:text-gray-200 text-sm sm:text-base hover:underline"
              >
                09159163256
              </a>
              <a
                href="mailto:tomsinonyedikachi@gmail.com"
                className="text-gray-900 dark:text-gray-200 text-sm sm:text-base hover:underline"
              >
                tomsinonyedikachi@gmail.com
              </a>
              <span className="text-gray-900 dark:text-gray-200 text-sm sm:text-base">
                Nigeria
              </span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-[#23243a]" />

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="relative group">
              <Image
                src={profile}
                className="object-cover rounded-2xl w-40 h-40 sm:w-56 sm:h-56 md:w-48 md:h-48 shadow-lg border-4 border-[#8750F7] dark:border-[#78ABA8] transition-all group-hover:scale-105"
                alt="Thomson Onyedikachi"
                width={192}
                height={192}
                priority
              />
              <span className="absolute bottom-2 right-2 bg-[#8750F7] dark:bg-[#78ABA8] text-white text-xs px-2 py-1 rounded-full shadow-md">
                Available
              </span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mt-4 md:mt-0 leading-relaxed">
              Highly motivated and experienced <span className="font-semibold text-[#8750F7] dark:text-[#78ABA8]">full-stack developer</span> with a strong passion for designing, developing, and deploying scalable, efficient, and reliable web applications. With a solid foundation in computer science and software engineering, I possess expertise in a range of technologies, including front-end, back-end, databases, and operating systems.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-[#23243a]" />

        <div>
          <Experience />
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;