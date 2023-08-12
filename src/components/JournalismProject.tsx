import React from "react";
//import useScrollHook from "../hooks/useScrollObserver";

interface JournalismProjectProps {
  headline: string;
  image: string;
  publisher: string;
  link: string;
}

//prettier-ignore
const JournalismProject: React.FC<JournalismProjectProps> = ({ headline, image, publisher, link }) => {
  return (
    <a href={link} target="__blank" className="journalism-card-link">

    <div className="journalism-card">
      <div className="journalism-img-container">
          <img src={image} alt="" className="journalism-image"></img>
      </div>
          <h2 className="card-headline">{headline}</h2>
      <div className="journalism-card-bottom-text-container">
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
