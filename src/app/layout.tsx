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
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <div className="flex min-h-screen overflow-x-hidden">
            <Sidebar />
            <main className="flex-1 min-h-screen lg:ml-[20rem] w-full overflow-x-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}