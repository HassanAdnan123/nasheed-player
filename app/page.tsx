"use client";
import CustomAudio from "@/components/CustomAudio";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import CustomDarkModeToggle from "@/components/CustomDarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${
        darkMode
          ? "custom-background-darkmode text-white"
          : "custom-background text-black"
      }`}
    >
      {/* Header */}
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="flex flex-row items-center">
          <Image
            src={"/logo-transparent.png"}
            alt="Unable to load image"
            width={300}
            height={100}
            priority
          />
        </div>
        <CustomDarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>

      <div className="flex flex-col items-center justify-center my-8">
        <CustomAudio darkMode={darkMode} />
      </div>

      {/* Footer */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Links */}
      </div>
    </main>
  );
}
