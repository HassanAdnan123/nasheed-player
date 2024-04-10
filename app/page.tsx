"use client";
import CustomAudio from "@/components/CustomAudio";
import CustomCard from "@/components/CustomCard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle dark mode state
    setDarkMode((prevMode) => !prevMode);
  };

  const mainClass = `flex min-h-screen flex-col items-center justify-between p-24 ${
    darkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
  }`;

  // Return JSX content
  return (
    <main className={mainClass}>
      {/* Dark mode toggle button */}
      <button
        className={`bg-gray-300 dark:bg-gray-700 text-foreground p-3 rounded-full ${
          darkMode ? "dark:text-gray-300" : "dark:text-[white]"
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      {/* Header */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          NasheedPlayer.io
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Hassan Adnan
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      {/* Music Player Section */}
      <div className="flex flex-col items-center justify-center my-8">
        {/* Your MusicPlayer component */}
        <CustomAudio />
        <CustomCard />
      </div>

      {/* Footer */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Links */}
        {/* You can keep or modify these links based on your requirements */}
      </div>
    </main>
  );
}
