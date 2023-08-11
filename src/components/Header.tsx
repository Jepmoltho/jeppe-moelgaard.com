import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import myImage from "../media/profile-picture-v2.png";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header withts">
      <div className="container header-container">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex header-text-container h-100">
              <div>
                <p className="tagline">Hi, I'm a</p>
                <h1 className="text-start headline">
                  Software Developer
                  <br />
                </h1>
                <h3 className="text-start sub-headline ">
                  skilled in coding and communications
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center h-100 p-5 profile-picture-container">
              <center>
                <img
                  className="profile-picture"
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

/*
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import myImage from "../media/profile-picture-v2.png";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex header-text-container h-100"> 
            <div>
              <p className="tagline">Hi, I'm a</p>
              <h1 className="text-start headline">
                Software Developer
                <br />
              </h1>
              <h3 className="text-start sub-headline ">
                skilled in coding and communications
           
              </h3>
            </div>
          </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center h-100 p-5 profile-picture-container">
              <center>
                <img
                  className="profile-picture"
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
*/
