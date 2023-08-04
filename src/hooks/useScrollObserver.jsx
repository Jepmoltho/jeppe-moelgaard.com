import { useEffect, useState } from "react";

const useScrollObserver = (targetRef, threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold: threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    const element = targetRef.current;
    if (!element) return;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [targetRef, threshold]);

  return isVisible;
};

export default useScrollObserver;

/*
import { useEffect, useState } from "react";

const useScrollObserver = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = targetRef.current;
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);

  return isVisible;
};

export default useScrollObserver;
*/
