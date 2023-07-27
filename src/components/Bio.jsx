import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function Bio() {
  const slides = [
    "As a Frontend Developer with a Master's Degree in Software Development from ITU and a Bachelor's Degree in Journalism from DMJX, I bring a unique blend of technical and communication skills to the table.",
    "My technical experience revoScript, and React, alongside other frontend frameworks and technologies.",
    "In a professional capacity, I have created web applications for enterprises, focusing on data management and visualisation.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <header className="bio">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-5">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div>
                <div className="circle c1 ci1" />
              </div>
              <div>
                <div className="circle c2 ci2" />
                <div className="circle c3 ci2" />
              </div>
              <div>
                <div className="circle c4 ci3" />
              </div>
              <div>
                <div className="circle c5 ci4" />
                <div className="circle c6 ci4" />
              </div>
              <div>
                <div className="circle c7 ci5" />
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
/*
  const [slide, setSlide] = useState();

  let index = 1;
  function changeSlide(index) {
    index += 1;
  }

        As a Frontend Developer with a Master's Degree in Software
                  Development from ITU and a Bachelor's Degree in Journalism
                  from DMJX, I bring a unique blend of technical and
                  communication skills to the table. My technical experience
                  revoScript, and React, alongside other frontend frameworks and
                  technologies. In a professional capacity, I have created web
                  applications for enterprises, focusing on data management and
                  visualisation.
  */
