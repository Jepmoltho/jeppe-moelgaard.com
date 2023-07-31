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

  useEffect(() => {
    if (isVisible) {
      //check if mobile or desktop. If desktop:
      document
        .getElementsByClassName("animation-container")
        [animationId].classList.add("fade-in");
      document
        .getElementsByClassName("animation-container")
        [animationId].classList.remove("hide-default");
    }
    //If mobile:
    //document.getElementsByClassName("animation-container-mobile")[animationId].classList.add("fade-in");
    //document.getElementsByClassName("animation-container-mobile")[animationId].classList.remove("hide-default");
  }, [isVisible, animationId]);

  return (
    <div className={` project ${projectNumber}`}>
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
          <div className="col-md-5 project-image-parent-container">
            <div className="d-flex align-items-center h-100">
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
      <div className="techstack-container">
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
