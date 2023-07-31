import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import useScrollHook from "../hooks/useScrollObserver";

export default function Bio() {
  const slides = [
    "My journey started in the world of journalism with a passion for storytelling. Enrolling in the Danish School of Media and Journalism (DMJX), I honed my communication skills and learned how to craft compelling narratives that captivated readers.",
    "As I specialized in tech journalism, my path intertwined with influential organizations. I found myself collaborating with DTU, delving into the realm of technological advancements shaping the future. The Nordic Blockchain Association and KPMG offered opportunities to explore the impact of blockchain technology and digital innovation on businesses and society. My writing resonated with tech enthusiasts and industry professionals alike, and I thrived in this dynamic landscape.",
    "However, I yearned to deepen my understanding of technology beyond just storytelling. I realized that to become a skilled tech journalist, I needed to embrace coding myself. Fueling my ambition, I pursued a Master's Degree in Software Development at the IT University of Denmark (ITU). This marked a transformative phase where I delved into the fundamental aspects of computer science and honed my coding skills with backend development, frontend / web development and database management.",
    "My path led me to roles as a frontend developer at tamigo, where I developed and maintained their website in the Umbraco framework which uses the ASP.NET and C# to organise the code base. I contributed by coding several landing pages as well as reusable components that displayed content in multiple languages across different devices. When I became an IT consultant at staun and stender, I delved into the intricacies of combining web development with database management, solidifying my understanding of data management and visualization. I navigated diverse tech challenges, applying both my journalistic prowess and newfound technical expertise to deliver impactful solutions.",
    "Today, I thrive as a full-stack developer at IT Minds, taking on exciting projects that push the boundaries of what's possible. Beyond my professional endeavors, I delve into various hobby projects, embracing HTML, CSS, JavaScript, React, Node.js, and TypeScript. Additionally, I explore the endless possibilities of OpenAI's API, experimenting with cutting-edge technologies that inspire innovation. My journey from journalism to tech has been a rewarding fusion of storytelling and technical expertise, allowing me to not only communicate effectively with diverse stakeholders but also to create innovative solutions at the intersection of technology and human connection.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const animationContainerRef = useRef();
  const isVisible = useScrollHook(animationContainerRef);

  useEffect(() => {
    if (isVisible) {
      document
        .getElementsByClassName("animation-container")[0]
        .classList.add("fade-in");
      document
        .getElementsByClassName("animation-container")[0]
        .classList.remove("hide-default");

      const circlesToFill = document.getElementsByClassName(
        "ci" + currentSlide
      );
      Array.from(circlesToFill).forEach(
        (circle) => (circle.style.backgroundColor = "#4ca1af")
      );

      if (currentSlide === 0) {
        const allCircles = document.querySelectorAll("[class^='ci']");
        Array.from(allCircles).forEach((circle) => {
          if (!circle.classList.contains("ci0")) {
            circle.style.removeProperty("background-color");
          }
        });
      }
    }
  }, [currentSlide, isVisible]);

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
  */
