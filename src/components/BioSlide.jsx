import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "../App.css";

export default function BioSlide() {
  const slides = [
    <div className="slide">My journey started...</div>,
    <div className="slide">As I specialized...</div>,
    <div className="slide">However, I yearned...</div>,
    <div className="slide">My path led...</div>,
    <div className="slide">Today, I thrive...</div>,
  ];

  //State for current and previous slide
  const [currentSlide, setCurrentSlide] = useState(0);

  //write a useEffect that adds class slide-enter to the slide that is about to enter
  useEffect(() => {
    const slide = slides[currentSlide]; //document.getElementsByClassName("slide")[currentSlide];
    slide.classList.add("slide-enter");
    slide.classList.remove("slide-enter");
    console.log("slide", currentSlide);

    /*
    setTimeout(() => {
      slide.classList.remove("slide-enter");
    }, 1000);
    */
  }, [currentSlide]);

  //Change slide when clicking arrow only for desktop
  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const mobileBreakpoint = 768;
  const isDesktop = window.innerWidth > mobileBreakpoint;

  //Swipe functionality for mobile
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDeltaX = touchEndX - touchStartX;
    const sensitivity = 100;
    const totalSlides = slides.length;

    if (touchDeltaX > sensitivity) {
      if (currentSlide !== 0) {
        setCurrentSlide(
          (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
      }
    } else if (touchDeltaX < -sensitivity) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  return (
    <header className="bio">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-5">
            <div className="d-flex align-items-center justify-content-center h-100 animation-container hide-default">
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
                  <p className="paragraph textslide">{slides[currentSlide]}</p>
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
                        <div className="slide-container paragraph" >
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
