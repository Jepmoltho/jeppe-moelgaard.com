import "bootstrap/dist/css/bootstrap.min.css";
//import React, { useEffect } from "react";
import "../App.css";
import Typer from "./Typer";

export default function Header() {
  /*
    useEffect(() => {
    const jumpingletters =
      document.getElementsByClassName("jumping-letters")[0];
    const arrayOfJumpingLetters = jumpingletters.innerText.split("");
    //console.log(arrayOfJumpingLetters);
  }, []);
*/
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <p className="text-start mb-1">Hi, I'm a</p>
            <h1 className="text-start">
              <Typer text="Frontend Developer" delay={70} start={0} />
              <br />
            </h1>
            <h3 className="text-start">
              <Typer
                text="skilled in coding and communications"
                delay={50}
                start={1.8}
              />
            </h3>

            {/*<h1 className="jumping-letters">Frontend developer</h1>*/}
            {/*<h1>+</h1>*/}
            {/*<h2>communications specialist</h2>*/}
          </div>
          <div className="col">
            <p>test</p>
          </div>
        </div>
      </div>
    </header>
  );
}
