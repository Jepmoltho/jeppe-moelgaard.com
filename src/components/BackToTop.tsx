import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
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

    const target = document.querySelector(".project-1"); // Change to the appropriate target element

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

export default BackToTopButton;

/*
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };
  */
/*
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setIsVisible(!entry.isIntersecting);
  };
  */

//const targetElements = document.querySelectorAll(".project"); // Change to the appropriate target elements

//targetElements.forEach((target) => {
//  observer.observe(target);
//});
/*
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  */

//FOR DESKTOP
/*
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
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
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
*/
