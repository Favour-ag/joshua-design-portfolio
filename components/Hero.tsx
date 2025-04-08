"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans overflow-hidden">
      {/* Add margin-left to account for Sidebar width */}

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="text-8xl font-bold">
          <Typewriter
            words={["Welcome To My Universe"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </h1>
        <p className="text-xl md:text-2xl">
          I'm <span className="text-blue-500">Joshua</span>, A{" "}
          <span className="text-blue-500">UX Designer</span>, Focused on
          Designing Beyond The World For{" "}
          <span className="text-blue-500">YOU</span>
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2">
        {/* <ModeToggle /> */}
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/3 right-1/4 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
