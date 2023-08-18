import React, { /*useRef,*/ useEffect /*, useState*/ } from "react";

interface ScrollObserverOptions {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
}

const useScrollObserver = (
  ref: React.RefObject<HTMLElement>,
  options: ScrollObserverOptions = {}
) => {
  const { root = null, rootMargin = "0px", threshold = 1.0 } = options;

  //const [isObserved, setIsObserved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.innerWidth < 768) {
          // Element is fully visible, apply styles
          ref.current?.parentElement?.classList.add("jcard-ref");
          /*
          console.log("yere");
          setIsObserved(true);
          */
        } else {
          // Element is not visible, remove styles
          ref.current?.parentElement?.classList.remove("jcard-ref");
          /*
          setIsObserved(false);
          */
        }
      },
      { root, rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold]);

  //added
  //return isObserved;
};

export default useScrollObserver;
