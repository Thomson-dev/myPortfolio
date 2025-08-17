"use client";

import useLocalStorage from "../components/theme/useLocalStorage";
import LeetCodePortfolio from "../Screens/ProjectsScreen";


export default function SkillsPage() {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <main className="h-screen">
    {/* @ts-ignore */}
    <LeetCodePortfolio theme={theme} />
    </main>
  );
}