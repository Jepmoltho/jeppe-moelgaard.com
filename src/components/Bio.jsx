import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import "../App.css";
//import useScrollHook from "../hooks/useScrollObserver";
import useScrollObserverLessSensitive from "../hooks/useScrollObserverLessSensitive";
import { slides } from "../data/biotext.jsx";

export default function Bio() {
  //State for current and previous slide on desktop and mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);

  //Change slide when clicking arrow only for desktop
  const changeSlide = () => {
    setPrevSlideIndex(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  //Ref for animation container to trigger animation when in viewport
  const animationContainerRef = useRef();
  const isVisible = useScrollObserverLessSensitive(animationContainerRef);
  //const isVisible = useScrollHook(animationContainerRef);

  const mobileBreakpoint = 768;
  const isDesktop = window.innerWidth > mobileBreakpoint;

  //prettier-ignore
  //Slide logic for desktop
  useEffect(() => {
    if (isVisible) {
      //Add fade in to circle animation upon load
      const elementToAnimate = document.getElementsByClassName("animation-container")[0];
      elementToAnimate.classList.add("fade-in");
      elementToAnimate.classList.remove("hide-default");

      //Collect circles to fill and clean
      if (isDesktop === true) {
        const circlesToFill = document.getElementsByClassName("ci" + currentSlide);
        const circlesToClean = document.getElementsByClassName("ci" + prevSlideIndex);

        //Fill circles going forwards
        Array.from(circlesToFill).forEach((circle) => (circle.style.backgroundColor = "#4ca1af"));

        //Clean circles if going backwards
        if (prevSlideIndex > currentSlide) {
          Array.from(circlesToClean).forEach((circle) => circle.style.removeProperty("background-color"));
        }

        //Clean circles except first circle if going to first slide from the last slide
        if (currentSlide === 0) {
          const allCircles = document.querySelectorAll("[class^='ci']");
          Array.from(allCircles).forEach((circle) => {
            if (!circle.classList.contains("ci0")) {
              circle.style.removeProperty("background-color");
            }
          });
        }
      }
    }
  }, [currentSlide, prevSlideIndex, isVisible, isDesktop]);

  //Swipe functionality for mobile
  function updateActiveSlide() {
    const slides = document.querySelectorAll(".slide-mobile");

    // Calculate the scroll position and width of each slide
    const container = document.querySelector(".slide-container");
    const containerWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const slideWidth = containerWidth;

    // Determine the index of the currently visible slide
    const currentIndex = Math.round(scrollLeft / slideWidth);

    //Set current slide for mobile rendering of circles
    setCurrentSlideMobile(currentIndex);

    // Remove slide-active class from all slides
    slides.forEach((slide) => slide.classList.remove("slide-active"));

    // Add slide-active class to the currently visible slide
    slides[currentIndex].classList.add("slide-active");

    //Color all circles up to the current slide
    const circlesToFill = document.getElementsByClassName("ci" + currentIndex);
    Array.from(circlesToFill).forEach(
      (circle) => (circle.style.backgroundColor = "#4ca1af")
    );

    //Remove color from all circles after the current slide
    const circlesToClean = document.getElementsByClassName(
      "ci" + (currentIndex + 1)
    );
    Array.from(circlesToClean).forEach((circle) =>
      circle.style.removeProperty("background-color")
    );
  }

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
                  <div className="slide-container textslide slide-container-desktop">
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
              <div className="d-flex align-items-center justify-content-center h-100 bio-text">
                {currentSlideMobile === 0 ? (<span className="arrow arrow-left hide-default">❮</span>) : (<span className="arrow arrow-left">❮</span>)}
                <center>
                  <div>
                    <p className="tagline">Not your average developer</p>
                    <div className="slide-container slidecontainer-mobile" onScroll={updateActiveSlide} >
                      {slides.map((slide, index) => (
                        <div className="slide-mobile" key={index}>
                          {slide}
                        </div>
                      ))}
                    </div>
                  </div>
                </center>
                {currentSlideMobile === slides.length - 1 ? (<span className="arrow arrow-right hide-default">❯</span>) : (<span className="arrow arrow-right">❯</span>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
