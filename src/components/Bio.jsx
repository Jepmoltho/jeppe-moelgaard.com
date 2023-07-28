import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "../App.css";

export default function Bio() {
  const slides = [
    "As a Frontend Developer with a Master's Degree in Software Development from ITU and a Bachelor's Degree in Journalism from DMJX, I bring a unique blend of technical and communication skills to the table.",
    "My technical experience revoScript, and React, alongside other frontend frameworks and technologies.",
    "In a professional capacity, I have created web applications for enterprises, focusing on data management and visualisation.",
    "Lorem ipsum this is slide 4",
    "Fade out. Mic drop",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  //prettier-ignore
  useEffect(() => {
    const circlesToFill = document.getElementsByClassName("ci" + currentSlide);
    Array.from(circlesToFill).forEach(circle => circle.style.backgroundColor = "#4ca1af");
  
    if (currentSlide === 0) {
      const allCircles = document.querySelectorAll("[class^='ci']");
      Array.from(allCircles).forEach(circle => {
        if (!circle.classList.contains("ci0")) {
          circle.style.removeProperty("background-color");
        }
      });
    }

  }, [currentSlide]);

  return (
    <header className="bio">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-5">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div>
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
          <div className="col-md-7">
            <div className="d-flex align-items-center justify-content-center h-100 bio-text">
              <div>
                <p className="tagline">Not your average developer</p>
                <p className="paragraph textslide">{slides[currentSlide]}</p>
              </div>
              <button className="button-6" onClick={changeSlide}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
