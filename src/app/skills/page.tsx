
"use client";
import Skills from "../Screens/SkillsScreen";
import useLocalStorage from "../components/theme/useLocalStorage";

export default function SkillsPage() {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <main className="h-screen">
          {/* @ts-ignore */}
      <Skills theme={theme} />
    </main>
  );
}
