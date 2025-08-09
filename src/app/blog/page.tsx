"use client";

import useLocalStorage from "../components/theme/useLocalStorage";
import AboutScreen from "../Screens/AboutScreen";
import BlogScreen from "../Screens/BlogScreen";

export default function SkillsPage() {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <main className="h-screen">
    {/* @ts-ignore */}
    <BlogScreen theme={theme} />
    </main>
  );
}