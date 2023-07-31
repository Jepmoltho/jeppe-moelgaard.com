import { useEffect, useState } from "react";

const useScrollObserver = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = targetRef.current;
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      /*
      document
        .getElementsByClassName("animation-container")[0]
        .classList.add("fade-in");
        */
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);

  return isVisible;
};

export default useScrollObserver;
