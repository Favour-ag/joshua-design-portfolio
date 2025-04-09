"use client";

import { motion } from "framer-motion";

const headingText = "Welcome To My Universe";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col items-end justify-center h-full text-right space-y-4 pr-6 md:pr-12">
        <motion.h1
          className="text-6xl md:text-8xl font-bold flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-lg md:text-xl">
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
