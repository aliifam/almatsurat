// src/components/BackToTopButton.tsx
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-transform duration-300 ${
        isVisible ? "scale-100" : "scale-0"
      }`}
      aria-label="Back to top"
      style={{ transform: isVisible ? "scale(1)" : "scale(0)" }} // Direct CSS transform
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
};

export default BackToTopButton;
