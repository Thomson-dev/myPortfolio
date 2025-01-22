"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import useLocalStroage from "../components/useLocalStorage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

type Props = {};

const HomeScreen = (props: Props) => {
  const [theme, setTheme] = useLocalStroage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div
      className="lg:max-w-[100%]   light-dark-mode   mx-auto"
      data-theme={theme}
    >
      <Navbar handleToggleTheme={handleToggleTheme} theme={theme} />

      <div className="lg:max-w-[1350px] md:max-w-[1000px]  w-[94%] mx-auto ">
     {/* @ts-ignore */}
        <Hero theme={theme} />
        {/* <About theme={theme} /> */}
         <Skills theme={theme} />
        <Projects theme={theme} /> 
      </div>

      <div
        className={` ${theme == "dark" ? "bg-[#050709] " : "bg-white "}  `}
      >
        {/* <Experience theme={theme} /> */}
        <Resume theme={theme}  />
      </div>
      <div className="lg:max-w-[1350px] md:max-w-[1000px]  w-[94%] mx-auto ">
         <Contact theme={theme} /> 
      </div>
      <div className="">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
