import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0, scale: 0.98 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-10 px-2 sm:px-6 max-w-2xl mx-auto"
      id="Contact"
    >
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-3xl sm:text-4xl font-bold text-center theme-text-primary">
          Contact Me
        </h3>
        <p className="text-base sm:text-lg text-center theme-text-secondary max-w-lg">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Reach out via the form or connect with me on social media!
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/Thomson-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border theme-border hover:bg-[#78ABA8] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://x.com/ThomsonOnyedika"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border theme-border hover:bg-[#78ABA8] hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/onyedikachi-thomson/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border theme-border hover:bg-[#78ABA8] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-10 mb-8">
        <div className="flex items-center gap-2 theme-text-secondary">
          <MdOutlineEmail className="text-xl text-[#78ABA8]" />
          <span className="text-sm sm:text-base select-all">thomsononyedika@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 theme-text-secondary">
          <IoPhonePortraitOutline className="text-xl text-[#78ABA8]" />
          <span className="text-sm sm:text-base select-all">+234 810 000 0000</span>
        </div>
        <div className="flex items-center gap-2 theme-text-secondary">
          <LuMapPin className="text-xl text-[#78ABA8]" />
          <span className="text-sm sm:text-base">Lagos, Nigeria</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="border theme-border bg-white/5 dark:bg-black/10 mt-6 p-4 sm:p-8 rounded-xl shadow-lg"
      >
        <form className="space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-base font-medium theme-text-primary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border theme-border p-3 rounded-md bg-transparent focus:ring-2 focus:ring-[#78ABA8] outline-none transition"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-base font-medium theme-text-primary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border theme-border p-3 rounded-md bg-transparent focus:ring-2 focus:ring-[#78ABA8] outline-none transition"
                required
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-base font-medium theme-text-primary mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="border theme-border p-3 rounded-md bg-transparent focus:ring-2 focus:ring-[#78ABA8] outline-none transition"
              rows={5}
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#78ABA8] text-white px-8 py-3 mt-2 rounded-full font-semibold hover:bg-[#5a8a87] transition-colors shadow-md"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;