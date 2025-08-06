import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/theme/themeContext";

export const metadata: Metadata = {
  title: "Thomson Dev Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 h-full lg:ml-[20rem]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}