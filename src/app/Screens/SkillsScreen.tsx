import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiCplusplus,
  SiPython,
  SiRust,
  SiGo,
  SiReact,
  SiLinux,
  SiVsco,
  SiAndroidstudio,
  SiFigma,
  SiPostgresql,
  SiKotlin,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiFlask,
  SiTerraform,
  SiDigitalocean
} from "react-icons/si";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillVariants = {
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

  const skills = [
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, name: "Node.JS", color: "#339933" },
    { icon: SiCplusplus, name: "C/C++", color: "#00599C" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiRust, name: "Rust", color: "#000000" },
    { icon: SiGo, name: "Golang", color: "#00ADD8" },
  ];

  const tools = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { icon: SiLinux, name: "Ubuntu Linux", color: "#E95420" },
    { icon: SiVsco, name: "VS Code", color: "#007ACC" },
    { icon: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  ];

  const categories = [
    {
      title: "Frontend",
      content: "HTML, CSS, TailwindCSS, JavaScript / TypeScript, ReactJS / NextJS."
    },
    {
      title: "Backend", 
      content: "Node.JS, ExpressJS, NestJS, Flask, PostgreSQL, MySQL, MongoDB, Golang, Redis."
    },
    {
      title: "DevOps",
      content: "Docker, Kubernetes, Terraform, Digital Ocean, Render, AWS."
    },
    {
      title: "Languages & Tools",
      content: "C/C++, Rust, Java, Kotlin, Git/GitHub, Linux."
    }
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen theme-bg-primary py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {/* Header - Reduced font sizes for larger screens */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl  font-bold theme-text-primary leading-tight">
              SKILLS
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#78ABA8] mx-auto lg:mx-0"></div>
          
          </motion.div>

          {/* Skills Grid - Ultra Responsive */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center group cursor-pointer w-full"
              >
                <div 
                  className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 shadow-md group-hover:shadow-lg sm:group-hover:shadow-xl"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon 
                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-medium theme-text-secondary text-center group-hover:text-[#78ABA8] transition-colors leading-tight px-1">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Grid - Ultra Responsive */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={skillVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center group cursor-pointer w-full"
              >
                <div 
                  className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 shadow-md group-hover:shadow-lg sm:group-hover:shadow-xl"
                  style={{ backgroundColor: `${tool.color}20` }}
                >
                  <tool.icon 
                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tool.color }}
                  />
                </div>
                <span className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-medium theme-text-secondary text-center group-hover:text-[#78ABA8] transition-colors leading-tight px-1">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories - Reduced font sizes for larger screens */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-1 sm:space-y-2 md:space-y-3"
              >
                <h3 className="text-base xs:text-lg sm:text-xl md:text-xl  font-bold text-[#78ABA8]">
                  {category.title}:
                </h3>
                <p className="text-xs xs:text-sm sm:text-base md:text-base  theme-text-secondary leading-relaxed max-w-none sm:max-w-full">
                  {category.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;