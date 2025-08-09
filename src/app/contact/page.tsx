
"use client";

import useLocalStorage from "../components/theme/useLocalStorage";
import Contact from "../Screens/ContactScreen";

export default function SkillsPage() {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <main className="h-screen">
          {/* @ts-ignore */}
     <Contact theme={theme} />
    </main>
  );
}