import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assert/project2.png";
import img2 from "../assert/project3.png";
import img3 from "../assert/project1.png";
import img4 from "../assert/project4.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
// };

const projects = [
  {
    id: 1,
    title: "Crypto Website Development for DeFi X",
    description: "Description for project one",
    image: img1,
    url: "https://eblog-three.vercel.app/",
    category: "Web App",
    technologies: ["Next Js", "TypeScript", "Tailwind CSS  ", "Express", " MongoDB"],
  },
  {
    id: 2,
    title: "Crypto Website Development for DeFi X",
    description: "Description for project two",
    image: img2,
    url: "https://molla-frontend.vercel.app",
    category: "Web App",
    technologies: ["React Js", "TypeScript", "Tailwind CSS  ", "Express", " MongoDB"],
  },
  {
    id: 3,
    title: "Crypto Website Development for DeFi X",
    description: "Description for project three",
    image: img3,
    url: " https://prime-base.vercel.app/",
    category: "Web Design",
    technologies: ["React Js", "TypeScript", "Tailwind CSS  ", "Express", " MongoDB"],
  },
  {
    id: 4,
    title: "Crypto Website Development for DeFi X",
    description: "Description for project three",
    image: img4,
    url:"https://elzeevahomez.com/",
    category: "Web App",
    technologies: ["React Js", "TypeScript", "Tailwind CSS  ", "Express", " MongoDB"],
  },
];

const All = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-[1200px] mx-auto  mt-[3rem]  "
    >
      {projects.map((project) => (
        <div key={project.id} className=" mt-10   ">
          <Link target="_blank" href={project.url || ""}>
            <div className="w-[100%] hover:border hover:border-blue-700 hover:p-4">
              <Image
                src={project.image}
                className=" h-[20rem] w-full shadow aspect-square"
                alt={project.title}
              />
            </div>
            <div className="flex flex-row py-8  flex-wrap items-center gap-2 ">
              {project.technologies.map((tech) => (
                <div className="border w-fit py-3 px-5  rounded-full">
                  <span className="text-base ">{tech}</span>
                </div>
              ))}
            </div>
          </Link>

           <h2 className="text-xl font-semibold">{project.title}</h2>
          {/* <p>{project.description}</p>  */}
        </div>
      ))}
    </motion.div>
  );
};

const WebApp = () => {
  const webAppProjects = projects.filter(
    (project) => project.category === "Web App"
  );
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-[3rem]  "
    >
      {webAppProjects.map((project) => (
        <div key={project.id}>
          <Image
            src={project.image}
            className="bg-[#140C1C] mx-auto sm:p-8 p-4 rounded-xl"
            alt={project.title}
          />

          {project.technologies.map((tech) => (
            <div className="">
              <p>{tech}</p>
            </div>
          ))}
          {/* <h2>{project.title}</h2>
          <p>{project.description}</p> */}
        </div>
      ))}
    </motion.div>
  );
};

const WebDesign = () => {
  const webDesignProjects = projects.filter(
    (project) => project.category === "Web Design"
  );
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-[3rem]  "
    >
      {webDesignProjects.map((project) => (
        <div key={project.id}>
          <Image
            src={project.image}
            className="bg-[#140C1C] mx-auto sm:p-8 p-4 rounded-xl"
            alt={project.title}
          />

          {project.technologies.map((tech) => (
            <div className="">
              <p>{tech}</p>
            </div>
          ))}
           <h2>{project.title}</h2>
          {/* <p>{project.description}</p>  */}
        </div>
      ))}
    </motion.div>
  );
};
//@ts-ignore
const Projects = ({ theme }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  const Tab = () => {
    return (
      <div className="">
        <div
          className={`max-w-[30rem]  flex justify-between gap-7 rounded-full py-1 px-4 mx-auto  ${
            theme == "dark" ? "text-[#DDDDDD] bg-black" : "text-black border"
          } `}
        >
          <motion.button
            onClick={() => toggleTab(1)}
            className={`w-full text-sm rounded-full sm:text-base py-3 ${
              toggleState === 1 ? "bg-[#8750F7] text-sm text-white" : "text-sm"
            }`}
            transition={{ duration: 1.5, ease: "easeIn" }}
          >
            All
          </motion.button>

          <motion.button
            onClick={() => toggleTab(2)}
            className={`w-full text-sm rounded-full px-1 sm:text-base  py-3 ${
              toggleState === 2 ? "bg-[#8750F7] text-sm text-white" : "text-sm"
            }`}
            transition={{ duration: 1.5, ease: "easeIn" }}
          >
            Web Design
          </motion.button>

          <motion.button
            onClick={() => toggleTab(3)}
            className={`w-full text-sm rounded-full sm:text-base py-3 ${
              toggleState === 3 ? "bg-[#8750F7] text-sm text-white" : "text-sm"
            }`}
            transition={{ duration: 1.5, ease: "easeIn" }}
          >
            Web App
          </motion.button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[10rem]" id="Porfolio">
      <h1 className="text-center text-grad font-bold  xl:text-5xl lg:text-4xl  text-grad text-[1.8rem] ">
        My Recent Works
      </h1>

      <div className="py-2">
        <Tab />

        <div className="">
          <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
            <All />
          </div>

          <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
            <WebDesign />
          </div>

          <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
            <WebApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
