import { useEffect, useRef } from "react";
import useScrollHook from "../hooks/useScrollObserver";

export default function Project({
  tagline,
  headline,
  description,
  image,
  direction,
  classname,
  logos,
  projectnumber,
  animationId,
  links,
  hideImgOnMobile,
}) {
  //Logic for reversing and styling the order of the image and text
  const isReverse = `flex-row${direction === "reverse" ? "-reverse" : ""}`;
  const isReverseBool = direction === "reverse";

  const textContainerPadding = {
    paddingRight: isReverseBool ? "00px" : "60px",
    paddingLeft: isReverseBool ? "60px" : "0px",
  };

  //Logic for styling the project number
  const projectNumber = `project-${projectnumber}`;

  //Logic for fading in the images of the project on desktop and mobile
  const animationContainerRef = useRef();
  const isVisible = useScrollHook(animationContainerRef);
  const animationContainerMobileRef = useRef();
  const isVisibleMobile = useScrollHook(animationContainerMobileRef);

  const isOnMobile = window.innerWidth < 768;

  //prettier-ignore
  //Add fade in animation on desktop view
  useEffect(() => {
    if (isVisible) {
      const elementToAnimate = document.getElementsByClassName("animation-container")[animationId];  //Check why bio component has a depenency on this
      elementToAnimate.classList.add("fade-in");
      elementToAnimate.classList.remove("hide-default");
    }
  }, [isVisible, animationId]);

  //prettier-ignore
  //Add fade in animation on mobile view
  useEffect(() => {
    if (isVisibleMobile) {
      const elementToAnimate = document.getElementsByClassName("animation-container-mobile")[animationId - 1];
      elementToAnimate.classList.add("fade-in");
      elementToAnimate.classList.remove("hide-default");
    }
  }, [isVisibleMobile, animationId]);

  return (
    <div className={`project ${projectNumber}`}>
      <div className="container project-container">
        <div className={`row ${isReverse}`}>
          <div
            className="col-md-7 project-text-container"
            style={textContainerPadding}
          >
            <div className="d-flex align-items-center h-100">
              <div>
                <p></p>
                <p className="tagline-tabs">{tagline}</p>
                <h2>{headline}</h2>
                <p>{description}</p>
                <div className="links">
                  <p className="inline-p">Links: </p>
                  {links}
                </div>
                <p></p>
              </div>
            </div>
          </div>
          {/*prettier-ignore */}
          <div className={`col-md-5 project-image-parent-container ${hideImgOnMobile === true && isOnMobile ? "remove-default" : ""}`}>
            <div className="d-flex align-items-center" >
              <img
                ref={animationContainerRef}
                className={`tabsimage ${classname} animation-container hide-default`}
                src={image}
                alt="profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={animationContainerMobileRef}
        className="techstack-container animation-container-mobile hide-default"
      >
        <div className="techstack">
          <p className="paragraphtechstack">Techstack:</p>
          <div className="tech-logo-container">{logos}</div>
        </div>
      </div>
    </div>
  );
}
