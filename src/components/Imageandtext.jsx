import Typer from "./Typer";
import myImage from "../media/profile-picture-v2.png";

export default function Imageandtext() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div class="d-flex align-items-center h-100">
              <div>
                <p className="tagline">Hi, I'm a!</p>
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
            </div>
          </div>
          <div className="col-md-5">
            <div class="d-flex align-items-center h-100 p-5">
              <img
                className="profile-picture image"
                src={myImage}
                alt="profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
