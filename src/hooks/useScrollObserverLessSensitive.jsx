import { useEffect, useState } from "react";

const useScrollObserverLessSensitive = (targetRef, threshold = 0.5) => {
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

export default useScrollObserverLessSensitive;
