import { useEffect, useRef } from "react";
import useScrollHook from "../hooks/useScrollObserver";
import useScrollObserverMobile from "../hooks/useScrollObserverMobile";

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
  const isReverse = `flex-row${direction === "reverse" ? "-reverse" : ""}`;
  const isReverseBool = direction === "reverse";

  const textContainerPadding = {
    paddingRight: isReverseBool ? "00px" : "60px",
    paddingLeft: isReverseBool ? "60px" : "0px",
  };

  const projectNumber = `project-${projectnumber}`;

  const animationContainerRef = useRef();
  const isVisible = useScrollHook(animationContainerRef);

  const animationContainerMobileRef = useRef();
  const isVisibleMobile = useScrollObserverMobile(animationContainerMobileRef);

  const isOnMobile = window.innerWidth < 768;

  //prettier-ignore
  useEffect(() => {
    if (isVisible) {
      //check if mobile or desktop. If desktop:
      //Check why bio component has a depenency on this
      document.getElementsByClassName("animation-container")[animationId].classList.add("fade-in");
      document.getElementsByClassName("animation-container")[animationId].classList.remove("hide-default");
    }
  }, [isVisible, animationId]);

  //prettier-ignore
  useEffect(() => {
    if (isVisibleMobile /*&& isOnMobile*/) {
     document.getElementsByClassName("animation-container-mobile")[animationId - 1].classList.add("fade-in");
      //document.getElementsByClassName("animation-container")[animationId].classList.add("fade-down");
      document.getElementsByClassName("animation-container-mobile")[animationId - 1].classList.remove("hide-default");
      //document.getElementsByClassName("animation-container")[animationId].classList.remove("hide-default");
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
            <div className="d-flex align-items-center" /*h-100*/>
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
      {/* Move this one div up if its causing problems*/}
      <div
        ref={animationContainerMobileRef}
        className="techstack-container animation-container-mobile hide-default"
      >
        <div className="techstack">
          <p className="paragraphtechstack">Techstack:</p>
          {/*Pass hook to tech-logo-container*/}
          <div className="tech-logo-container">
            <center>{logos}</center>
          </div>
        </div>
      </div>
    </div>
  );
}
