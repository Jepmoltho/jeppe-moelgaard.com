import React, { useRef } from "react";
import useScrollObserver from "../hooks/useScrollObserverJCard";
//import useScrollHook from "../hooks/useScrollObserver";

interface JournalismProjectProps {
  headline: string;
  image: string;
  publisher: string;
  link: string;
  /*animationRef: any;*/
}

//prettier-ignore
const JournalismProject: React.FC<JournalismProjectProps> = ({ headline, image, publisher, link }) => {
  
  const cardRef = useRef<HTMLDivElement>(null);

  //Added isObserved constant
  /*const isObserved = */useScrollObserver(cardRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  //Added isObserved constant which will be true or false because hook returns the state
  //const isObservedClass = isObserved ? "hecking-observed" : "no-observe-sempai";

  return (
    <a href={link} target="__blank" className="journalism-card-link">

    <div className={`journalism-card`} /*${isObservedClass}*/ >
      <div className="journalism-img-container">
          <img src={image} alt="" className="journalism-image"></img>
      </div>
          <h2 className="card-headline" ref={cardRef}>{headline}</h2>
      <div className="journalism-card-bottom-text-container" >
        <p className="publisher">
          Publisher: {publisher}
        </p>
        <p className="date-published">
         <span className="clockicon">&#128337;</span> 10/10/2020
        </p>
      </div>
    </div>
    </a>

  );
};

export default JournalismProject;
