"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const headingText = "Welcome To My Universe";

const HeroSection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Count-up animation
    const duration = 7;
    let counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: duration,
      onUpdate: () => setCount(Math.floor(counter.value)),
      onComplete: () => {
        // Fade out loading screen
        gsap.to(".loading", {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setLoading(false);
          },
        });

        // Hero text fade in
        gsap.fromTo(
          ".hero-content",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        );
      },
    });

    // Mouse tracking
    const cursor = cursorRef.current;
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-lime-300 pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Loading Screen */}
      {loading && (
        <div className="loading fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50">
          <div className="lg:absolute left-1 bottom-1">
            <h1 className="text-[300px] text-lime-300">{count}</h1>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans overflow-hidden hero-section z-10">
        <div className="hero-content flex flex-col items-end justify-center h-full text-right space-y-4 pr-6 md:pr-12">
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
            I&apos;m <span className="text-blue-500">Joshua</span>, A{" "}
            <span className="text-blue-500">UX Designer</span>, Focused on
            Designing Beyond The World For{" "}
            <span className="text-blue-500">YOU</span>
          </p>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/3 right-1/4 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
