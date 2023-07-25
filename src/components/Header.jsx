import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Typer from "./Typer";
import myImage from "../media/profile-picture.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-7 m-5">
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
          <div className="col paragraph pt-4">
            <img className="profile-picture" src={myImage} alt="profile"></img>
          </div>
        </div>
      </div>
    </header>
  );
}
