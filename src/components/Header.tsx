import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import myImage from "../media/profile-picture-v2-comp.png";
import React, { useEffect } from "react";
import "../fonts.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  useEffect(() => {
    document
      .getElementsByClassName("profile-picture")[0]
      .classList.remove("hide-default");
    document
      .getElementsByClassName("profile-picture")[0]
      .classList.add("profile-picture-animation");
  }, []);

  return (
    <header className="header withts">
      <div className="container header-container">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex header-text-container h-100">
              <div>
                <p className="tagline Raleway">Hi, I'm a</p>
                <h1 className="text-start headline Montserrat">
                  Software Developer
                  <br />
                </h1>
                <h3 className="text-start sub-headline Raleway">
                  skilled in coding and communications
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center h-100 p-5 profile-picture-container">
              <center>
                <img
                  className="profile-picture hide-default"
                  src={myImage}
                  alt="profile"
                ></img>
              </center>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
