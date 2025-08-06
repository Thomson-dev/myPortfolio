"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useLocalStorage from "../components/theme/useLocalStorage";
import Bottombar from "../components/Bottombar";
import AboutScreen from "./AboutScreen";

type Props = {};

const HomeScreen = (props: Props) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

return (
  <div className="theme-bg-primary">
    <Navbar />

 
    <AboutScreen />


 
  </div>
);

};

export default HomeScreen;