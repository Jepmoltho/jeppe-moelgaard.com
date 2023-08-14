//FOR DESKTOP

import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 1400) {
      setIsVisible(true);
      console.log("visible");
    } else {
      setIsVisible(false);
      console.log("not visible");
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
      className={`back-to-top-button bttb-desktop ${
        isVisible ? "visible" : ""
      }`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
