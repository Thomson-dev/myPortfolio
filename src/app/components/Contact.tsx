import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

//@ts-ignore
const Contact = ({ theme }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="py-5"
      id="Contact"
    >
      <div className="flex justify-center px-4 space-y-4 items-center flex-col">
        <h3 className=" text-3xl font-bold text-center">Contact</h3>
        <p className="max-w-4xl text-base md:text-lg figtree mt-3 tracking-wide  text-center">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to
          evans@yourwebsite.com .Want to get connected? Follow me on the social
          channels below.
        </p>

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
      </div>

      <hr className="mt-16" />

      <div className="mt-10 border-l-2 py-3  border-[#8750F7] ">
        <h1 className="md:text-5xl text-2xl font-bold ml-2  ">
          Contact Details
        </h1>
      </div>

      <p className="md:text-lg text-base text-gray-800 mt-6 max-w-3xl">
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn&apos;t anything embarrassing hidden in the middle of text.
      </p>

      <div className="md:grid-cols-3 grid-cols-2 gap-5 grid  my-14 ">
        <div className="flex  md:gap-4 items-center">
          <IoPhonePortraitOutline className="text-3xl hidden  md:text-5xl text-[#8750F7] " />
          <div className="flex flex-col mx-2 space-y-2 md:items-center items-start">
            <h2 className="text-lg md:text-2xl font-bold">Phone</h2>
            <span className="text-base md:text-lg">+123-456-7890</span>
          </div>
        </div>

        <div className="  flex  md:px-6  py-2 md:gap-4 items-center">
          <LuMapPin className="text-3xl hidden md:text-5xl text-[#8750F7] " />
          <div className="flex flex-col mx-2 space-y-2  md:item-center items-start">
            <h2 className="text-lg md:text-2xl font-bold">Location</h2>
            <span className="text-base md:text-lg"> Yaba, Lagos, Nigeria</span>
          </div>
        </div>

        <div className="  flex md:px-6 py-2 gap-4 items-center">
          <MdOutlineEmail className="md:text-5xl hidden text-[#8750F7] " />
          <div className="flex flex-col mx-2 space-y-2 md:items-center items-start">
            <h2 className="md:text-2xl text-lg font-bold">Email</h2>
            <span> tomsinonyedikachi@gmail</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.496540959573!2d3.3509657086100204!3d6.505966747105633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8c358b3f4b%3A0x5552cfbd43df8434!2sYaba%2C%20Oworonshoki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736160565624!5m2!1sen!2sng"
          width="100%"
          className="h-[400px] md:h-[400px] "
          height=""
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      <div className="border mt-10 p-3 md:p-10 rounded-xl">
        <form className="space-y-4">
          <div className="md:flex-row flex-col items-center w-full   flex gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="name" className="text-lg py-2 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-4 outline-none rounded-md"
                required
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="email" className="text-lg py-2 outline-none ">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-4 outline-none rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg py-2">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 outline-none p-5 rounded-md"
              rows={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#8750F7] text-white p-4 mt-6 rounded-full hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
