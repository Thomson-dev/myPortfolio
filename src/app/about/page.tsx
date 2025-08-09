"use client";

import useLocalStorage from "../components/theme/useLocalStorage";
import AboutScreen from "../Screens/AboutScreen";

export default function SkillsPage() {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <main className="h-screen">
        {/* @ts-ignore */}
    <AboutScreen theme={theme} />
    </main>
  );
}