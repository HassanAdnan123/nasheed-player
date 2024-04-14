"use client";
import CustomAudio from "@/components/CustomAudio";
import { faCloudSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle dark mode state
    setDarkMode((prevMode) => !prevMode);
  };

  const mainClass = `flex min-h-screen flex-col items-center justify-between p-24 ${
    darkMode
      ? "custom-background-darkmode text-white"
      : "custom-background text-black"
  }`;

  // Return JSX content
  return (
    <main className={mainClass}>
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
        {/* Dark mode */}
        <div>
          <button
            className={`bg-gray-300 dark:bg-gray-700 text-foreground p-3 rounded-full grid grid-cols-3 grid-flow-col gap-0 ${
              darkMode ? "dark:text-gray-300" : "dark:text-[white]"
            }`}
          >
            <FontAwesomeIcon
              icon={faCloudSun}
              className={`h-5 w-8 ${
                darkMode ? "text-[grey]" : "text-[#FFD43B]"
              }`}
            />
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleDarkMode}
            />
            <FontAwesomeIcon
              icon={faMoon}
              className={`h-5 w-8 ${darkMode ? "text-[white]" : "text-[grey]"}`}
            />
          </button>
        </div>
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
