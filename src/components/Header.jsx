import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Typer from "./Typer";
import myImage from "../media/profile-picture-v2.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="row">
          <div className="col-7 column">
            <p className="text-start tagline mb-1">Hi, I'm a</p>
            <h1 className="text-start headline">
              <Typer text="Frontend Developer" delay={50} start={0} />
              <br />
            </h1>
            <h3 className="text-start headline">
              <Typer
                text="skilled in coding and communications"
                delay={30}
                start={1}
              />
            </h3>
          </div>
          <div className="col paragraph column">
            <center>
              <img
                className="profile-picture image"
                src={myImage}
                alt="profile"
              ></img>
            </center>
          </div>
        </div>
      </div>
    </header>
  );
}
