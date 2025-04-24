"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headingText = "Welcome To My Universe";

const HeroSection: React.FC = () => {
  const [stars, setStars] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans overflow-hidden">
      {/* Space Background Elements - now dark mode compatible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars - change color based on mode */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-gray-800 dark:bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: star.delay,
            }}
          />
        ))}

        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-800 dark:bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Distant Galaxy - now mode-sensitive */}
        <motion.div
          className="absolute rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 dark:opacity-20 blur-xl"
          style={{
            width: "300px",
            height: "300px",
            top: "20%",
            left: "10%",
          }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Shooting Stars */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute bg-gray-800 dark:bg-white h-0.5 rounded-full"
            style={{
              width: "100px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [0, 500],
              y: [0, 500],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 15 + 5,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full text-right space-y-4 pr-6 md:pr-12">
        <motion.h1
          className="text-6xl md:text-[95px] font-bold flex flex-wrap justify-center"
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

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I&apos;m{" "}
          <span className="text-blue-500 dark:text-blue-300 font-medium">
            Joshua
          </span>
          , A{" "}
          <span className="text-blue-500 dark:text-blue-300 font-medium">
            UX Designer
          </span>
          , Focused on Designing Beyond The World For{" "}
          <span className="text-blue-500 dark:text-blue-300 font-medium">
            YOU
          </span>
        </motion.p>
      </div>

      {/* Mode Toggle Placeholder */}
      <div className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2">
        {/* <ModeToggle /> */}
      </div>

      {/* Floating Planets - now mode-sensitive */}
      <motion.div
        className="absolute rounded-full bg-blue-200 dark:bg-blue-800 opacity-20 dark:opacity-30 blur-lg"
        style={{
          width: "150px",
          height: "150px",
          bottom: "10%",
          left: "15%",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute rounded-full bg-purple-200 dark:bg-purple-800 opacity-20 dark:opacity-30 blur-lg"
        style={{
          width: "80px",
          height: "80px",
          top: "30%",
          right: "20%",
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  );
};

export default HeroSection;
