"use client";

import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const BackToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200); // Show after scrolling 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        aria-label="Back to Top"
      >
        <FaCircleArrowUp className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTop;
