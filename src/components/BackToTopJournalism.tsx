import React, { useState, useEffect } from "react";

const BackToTopButtonJournalism: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (window.innerWidth < 768) {
      const entry = entries[0];
      setIsVisible(entry.boundingClientRect.bottom < window.innerHeight);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const target = document.querySelectorAll(".journalism-card")[1]; // Change to the appropriate target element

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const scrollSnapContainer = document.querySelector(
      ".scroll-snap-container"
    ); // Change to your actual scroll snap container element
    if (scrollSnapContainer) {
      scrollSnapContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`back-to-top-button bttb-mobile ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButtonJournalism;
