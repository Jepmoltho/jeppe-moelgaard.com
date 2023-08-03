import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
//import "../App.css";
import useScrollHook from "../hooks/useScrollObserver";

export default function Bio() {
  const slides = [
    "My journey started in the world of journalism with a passion fo storytelling. Enrolling in the Danish School of Media and Journalism DMJX), I honed my communication skills and learned how to craf",
    "As I specialized in tech journalism, my path intertwined with influentia",
    "However, I yearned to deepen my understanding of technology beyond just",
    "Lorem ipsum m with a passion fo storytelling. Enrolling in the Danish School of Media and Journalism DMJX), I honed my communication skills and learned how to craf",
    "However, I yearned to deepen my understanding of technology beyond just",
  ];

  //State for current and previous slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  //Change slide when clicking arrow only for desktop
  const changeSlide = () => {
    setPrevSlideIndex(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  //Ref for animation container to trigger animation when in viewport
  const animationContainerRef = useRef();
  const isVisible = useScrollHook(animationContainerRef);

  const mobileBreakpoint = 768;
  const isDesktop = window.innerWidth > mobileBreakpoint;

  useEffect(() => {
    //prettier-ignore
    if (isVisible) {
      //Add fade in to circle animation upon load
      document.getElementsByClassName("animation-container")[0].classList.add("fade-in");
      document.getElementsByClassName("animation-container")[0].classList.remove("hide-default");
      


      //Collect circles to fill and clean
      const circlesToFill = document.getElementsByClassName("ci" + currentSlide);
      const circlesToClean = document.getElementsByClassName("ci" + prevSlideIndex);

      //Fill circles going forwards
      Array.from(circlesToFill).forEach((circle) => (circle.style.backgroundColor = "#4ca1af"));

      //Clean circles if going backwards
      if (prevSlideIndex > currentSlide) {
        Array.from(circlesToClean).forEach((circle) => circle.style.removeProperty("background-color"));
      }

      //Clean circles if back to start except first cicle
      if (currentSlide === 0) {
        const allCircles = document.querySelectorAll("[class^='ci']");
        Array.from(allCircles).forEach((circle) => {
          if (!circle.classList.contains("ci0")) {
            circle.style.removeProperty("background-color");
          }
        });
      }
    }
  }, [currentSlide, prevSlideIndex, isVisible]);

  useEffect(() => {
    console.log(document.getElementsByClassName("slide")[0]);
    document.getElementsByClassName("slide")[0].classList.add("fade-in");
    document
      .getElementsByClassName("slide")[0]
      .classList.remove("hide-default");

    //document.getElementsByClassName("slide")[0].classList.remove("fade-in");
  }, [currentSlide]);

  //Swipe functionality for mobile
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDeltaX = touchEndX - touchStartX;
    const sensitivity = 100;
    const totalSlides = slides.length;

    if (touchDeltaX > sensitivity) {
      if (currentSlide !== 0) {
        setPrevSlideIndex(currentSlide);
        setCurrentSlide(
          (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
      }
    } else if (touchDeltaX < -sensitivity) {
      setPrevSlideIndex(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  return (
    <header className="bio">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-5">
            <div
              ref={animationContainerRef}
              className="d-flex align-items-center justify-content-center h-100 animation-container hide-default"
            >
              <div className="">
                <div className="circle c1 ci0" />
              </div>
              <div>
                <div className="circle c2 ci1" />
                <div className="circle c3 ci1" />
              </div>
              <div>
                <div className="circle c4 ci2" />
              </div>
              <div>
                <div className="circle c5 ci3" />
                <div className="circle c6 ci3" />
              </div>
              <div>
                <div className="circle c7 ci4" />
              </div>
            </div>
          </div>
          <div className="col-md-7 bio-text-container">
            {isDesktop === true ? (
              // Desktop
              <div className="d-flex align-items-center justify-content-center h-100 bio-text">
                <div>
                  <p className="tagline">Not your average developer</p>
                  <div className="paragraph textslide">
                    {slides[currentSlide]}
                  </div>
                </div>
                <button className="button-6" onClick={changeSlide}>
                  →
                </button>
              </div>
            ) : (
              // Mobile
              //prettier-ignore
              <div
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => handleTouchEnd(e)}
                className="d-flex align-items-center justify-content-center h-100 bio-text"
              >
                {currentSlide === 0 ? ("") : (<span className="arrow arrow-left">❮</span>)}
                <center>
                  <div>
                    <p className="tagline">Your average developer</p>
                    <div className="paragraph textslide">
                    

                      {slides[currentSlide]}
                    </div>
                  </div>
                </center>
                {currentSlide === slides.length - 1 ? ("") : (<span className="arrow arrow-right">❯</span>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
