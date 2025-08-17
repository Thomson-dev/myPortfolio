import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme/themeContext";
import { Inter } from "next/font/google"; // added

// Load Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="en" className={inter.className}> {/* added Inter class */}
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <div className="flex min-h-screen overflow-x-hidden">
            <Sidebar />
            <div className="flex-1 min-h-screen lg:ml-[20rem]">
              <Navbar />
              <main className="w-full">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}