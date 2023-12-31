/*
  
  //Swipe functionality for mobile
  function updateActiveSlide() {
    const slides = document.querySelectorAll(".slide-mobile");

    // Calculate the scroll position and width of each slide
    const container = document.querySelector(".paragraph");
    const containerWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const slideWidth = containerWidth;
    console.log("scrollLeft", scrollLeft);

    // Determine the index of the currently visible slide
    const currentIndex = Math.floor(scrollLeft / slideWidth);

    //Set current slide for mobile rendering of circles
    setCurrentSlideMobile(currentIndex);

    // Remove slide-active class from all slides
    slides.forEach((slide) => slide.classList.remove("slide-active"));

    // Add slide-active class to the currently visible slide
    slides[currentIndex].classList.add("slide-active");

    //container.scrollTo({ left: currentIndex * slideWidth, behavior: "smooth" });
    //container.scrollTo({ left: 600, behavior: "smooth" });

    //write a function that color all circles up to the current slide
    const circlesToFill = document.getElementsByClassName("ci" + currentIndex);
    Array.from(circlesToFill).forEach(
      (circle) => (circle.style.backgroundColor = "#4ca1af")
    );

    //write a function that removes color from all circles after the current slide
    const circlesToClean = document.getElementsByClassName(
      "ci" + (currentIndex + 1)
    );
    Array.from(circlesToClean).forEach((circle) =>
      circle.style.removeProperty("background-color")
    );
  }

*/

/*

//OLD Swipe functionality for mobile before implementing scroll
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



*/

/*
  /*
  useEffect(() => {
    console.log(document.getElementsByClassName("slide")[0]);
    document.getElementsByClassName("slide")[0].classList.add("fade-in");
    document
      .getElementsByClassName("slide")[0]
      .classList.remove("hide-default");

    //document.getElementsByClassName("slide")[0].classList.remove("fade-in");
  }, [currentSlide]);
  */

/*
  let prevScrollLeft = 0;

  function detectScrollDirection() {
    const container = document.querySelector(".paragraph");
    const currentScrollLeft = container.scrollLeft;

    if (currentScrollLeft > prevScrollLeft) {
      // Scrolling to the right
      console.log("Scrolling to the right");
      return "right";
    } else if (currentScrollLeft < prevScrollLeft) {
      // Scrolling to the left
      console.log("Scrolling to the left");
      return "left";
    }

    // Update the previous scroll position for the next scroll event
    prevScrollLeft = currentScrollLeft;
  }
*/

/*
  const handleTouchMove = (e) => {
    console.log("touch move");
    //e.preventDefault();
  };
  */
/*
  const handleTouchEnd = (e) => {
    console.log("touch end");
    //if (e.touches.length === 0) return;

    const touchEndX = e.changedTouches[0].clientX; //e.touches[0].clientX;
    const touchDeltaX = touchEndX - touchStartX;
    const sensitivity = 100;

    if (touchDeltaX > sensitivity) {
      setCurrentSlide((prevsSlide) => (prevsSlide - 1) % slides.length);
    } else if (touchDeltaX < -sensitivity) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }
  };
*/

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

/*
.project-image-parent-container .squareimg,
.project-image-parent-container .ownlogo,
.project-image-parent-container .silkeborgfadoellogo {
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
}
*/

/*
.stophere {
  @media screen and (max-width: 768px) {
    scroll-snap-stop: always;
    scroll-snap-align: start;
    height: 0px !important;
  }
}
*/

/*
If you want to apply some rules that doesnt count hovering the active tab, you can use this:
.tab:not(.active):not(:hover) {
  background-color: #15395a;
  color: aliceblue;
}
*/

/*
.sogslogo,
.ownlogo,
.silkeborgfadoellogo {
  padding: 120px;
}
@media screen and (max-width: 1200px) {
  .sogslogo,
  .ownlogo,
  .silkeborgfadoellogo {
    padding: 80px;
  }
}
@media screen and (max-width: 1000px) {
  .sogslogo,
  .ownlogo,
  .silkeborgfadoellogo {
    padding: 70px;
  }
}
@media screen and (max-width: 900px) {
  .sogslogo,
  .ownlogo,
  .silkeborgfadoellogo {
    padding: 60px;
  }
}
@media screen and (max-width: 768px) {
  .sogslogo,
  .ownlogo,
  .silkeborgfadoellogo {
    padding: 50px;
  }
}
@media screen and (max-width: 480px) {
  .sogslogo,
  .ownlogo,
  .silkeborgfadoellogo {
    padding: 40px;
  }
}
*/

/*
.silkeborgfadoellogo {
  padding: 60px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    padding-bottom: 20px;
  }
}
*/

/*
.ownlogo {
  padding: 6rem;
  @media screen and (max-width: 768px) {

  }
}
*/

/*
.column-circle {
  display: flex;
  justify-content: left;
  height: 100%;
  align-items: center;
}
*/

/*
.header-container {
  height: 300px; 
}
*/

/*
.row {
  height: 100%;
}
*/

/*
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
*/
/*
.leftalligned {
  text-align: left;
}
*/
/* Bio */
/*
.bio-container {
  height: 400px;
}
*/

/*
.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
*/

/*
.scrollspacetall {
  @media screen and (max-width: 768px) {
    background-color: #ccd7e1;
    height: 65px !important;
    scroll-snap-stop: always;
    scroll-snap-align: start;
  }
}
*/
