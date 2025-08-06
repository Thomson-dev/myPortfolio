import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGo, SiTypescript, SiC, SiAndroid, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import profile from "@/app/assert/pic.png";

const AboutScreen = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const techStackVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="About"
      className="min-h-screen theme-bg-primary flex items-center px-4 sm:px-6 py-12 lg:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Header Section */}
            <motion.div className="space-y-3 lg:space-y-4" variants={itemVariants}>
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-2"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-2 h-2 bg-[#78ABA8] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="theme-text-secondary text-xs sm:text-sm font-medium tracking-wider uppercase">
                  おはよう！CS Student & Software Engineer
                </p>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="theme-text-primary">Hey, I&apos;m </span>
                <motion.span 
                  className="text-[#78ABA8] block lg:inline"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Thomson
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="text-base sm:text-lg lg:text-xl theme-text-secondary font-medium"
                variants={itemVariants}
              >
                Full-Stack Developer <span className="text-[#78ABA8]">×</span> CS Student <span className="text-[#78ABA8]">×</span> Tech Explorer
              </motion.div>
            </motion.div>
            
            {/* Bio Section */}
            <motion.div className="space-y-4 lg:space-y-6" variants={itemVariants}>
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.p 
                  className="theme-text-primary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  Hey there — I&apos;m <span className="font-semibold text-[#78ABA8]">Thomson</span>, a Computer Science student and passionate Software Engineer. I go by <span className="text-[#78ABA8] font-semibold">Thomson</span> online.
                </motion.p>
                
                <motion.p 
                  className="theme-text-primary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  I love building useful things — from <span className="text-[#78ABA8]">full-stack web apps</span> using the MERN stack, to sleek <span className="text-[#78ABA8]">mobile experiences</span> with React Native, and experimenting with <span className="text-[#78ABA8]">Web3</span>, smart contracts, and integrating payments through platforms like Stripe and PayStack.
                </motion.p>
                
                <motion.p 
                  className="theme-text-secondary text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  I&apos;m currently diving deeper into backend architecture, system design, and product development — always striving to create clean, scalable, and meaningful solutions.
                </motion.p>
                
                <motion.p 
                  className="theme-text-secondary text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  Outside of code, you&apos;ll find me exploring new technologies, contributing to hackathons, or working on side projects that challenge and inspire me 🚀
                </motion.p>
              </motion.div>
              
              {/* Tech Stack */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: SiReact, name: "React", color: "green-500" },
                  { icon: SiNodedotjs, name: "Node.js", color: "green-600" },
                  { icon: SiMongodb, name: "MongoDB", color: "green-700" },
                  { icon: SiTypescript, name: "TypeScript", color: "blue-600" },
                  { icon: SiGo, name: "Go", color: "blue-500" },
                  { name: "Web3", color: "purple-500" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`flex items-center space-x-1.5 bg-${tech.color}/10 text-${tech.color} px-2.5 py-1.5 rounded-full text-xs`}
                    variants={techStackVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                  >
                    {tech.icon && <tech.icon className="text-sm" />}
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
                variants={itemVariants}
              >
                <motion.button 
                  className="bg-[#78ABA8] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center space-x-2 text-sm group"
                  whileHover={{ scale: 1.05, backgroundColor: "#5A8A87" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.div>
                  <span className="font-semibold">View Projects</span>
                </motion.button>
                
                <motion.button 
                  className="theme-bg-card theme-text-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center space-x-2 theme-border text-sm group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FaFileAlt className="text-sm" />
                  <span className="font-semibold">Resume</span>
                </motion.button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-4 pt-2"
                variants={itemVariants}
              >
                <motion.a 
                  href="#" 
                  className="theme-text-secondary hover:text-[#78ABA8] transition-colors p-1.5"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="theme-text-secondary hover:text-[#78ABA8] transition-colors p-1.5"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Animated Background Gradients */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#78ABA8]/20 via-purple-400/10 to-pink-400/10 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6"
                animate={{ 
                  rotate: [6, 8, 6],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3"
                animate={{ 
                  rotate: [-3, -5, -3],
                  scale: [1, 1.01, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Main Image */}
              <motion.div 
                className="relative z-10 w-full group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={profile}
                  alt="Thomson - Full-Stack Developer & CS Student"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl object-cover aspect-[4/5] transition-transform duration-300"
                  priority
                />
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#78ABA8]/20 to-transparent rounded-xl sm:rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Floating Elements with Animation */}
              <motion.div 
                className="hidden sm:block absolute -top-2 -left-2 w-3 h-3 bg-[#78ABA8] rounded-full shadow-lg"
                variants={floatingVariants}
                animate="floating"
                style={{ animationDelay: '0s' }}
              />
              <motion.div 
                className="hidden sm:block absolute -bottom-3 -right-3 w-5 h-5 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs"
                variants={floatingVariants}
                animate="floating"
                style={{ animationDelay: '1s' }}
              >
                🚀
              </motion.div>
              <motion.div 
                className="hidden md:block absolute top-1/2 -right-4 w-3 h-3 bg-yellow-500 rounded-full shadow-lg"
                variants={floatingVariants}
                animate="floating"
                style={{ animationDelay: '2s' }}
              />
              
              {/* Interest Icons */}
              <motion.div 
                className="hidden lg:block absolute top-4 left-4 w-8 h-8 bg-purple-500/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white text-sm cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [-2, 2, -2],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div 
                className="hidden lg:block absolute bottom-16 left-2 w-8 h-8 bg-pink-500/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white text-sm cursor-pointer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [2, -2, 2],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🎨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;