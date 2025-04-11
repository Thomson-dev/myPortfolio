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
        <h3 className=" text-3xl font-bold text-center">Contact Me</h3>
     

      
      </div>

      <hr className="mt-16" />

     

    



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
