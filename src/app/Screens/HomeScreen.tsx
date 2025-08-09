"use client";
import React from "react";
import Navbar from "../components/Navbar";



import useLocalStorage from "../components/theme/useLocalStorage";

import AboutScreen from "./AboutScreen";


type Props = {};

const HomeScreen = (props: Props) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");



return (
  <div className="theme-bg-primary">
    <Navbar />
    <AboutScreen />
  </div>
);

};

export default HomeScreen;