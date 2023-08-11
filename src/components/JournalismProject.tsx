import React from "react";

interface JournalismProjectProps {
  headline: string;
  image: string;
}

//prettier-ignore
const JournalismProject: React.FC<JournalismProjectProps> = ({ headline, image }) => {
  return (
    <div className="journalism-card">
      <div className="journalism-img-container">
        <img src={image} alt="" className="journalism-image"></img>
      </div>
          <h2 className="card-headline">{headline}</h2>
      <div className="journalism-card-bottom-text-container">
        <p className="publisher">
          Publisher: Soaked By Slush
        </p>
        <p className="date-published">
         <span className="clockicon">&#128337;</span> 10/10/2020
        </p>
      </div>

      {/*
      <div className="container">
        <div className="row">
          <center>
            <h2>{headline}</h2>
          </center>
          <img src={image} alt="" className="journalism-image"></img>
        </div>
      </div>
      */}
    </div>
  );
};

export default JournalismProject;
