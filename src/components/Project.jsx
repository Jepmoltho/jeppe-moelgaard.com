//import myImage from "../media/profile-picture-v2.png";
import js from "../media/JS.png";
import html from "../media/HTML.png";
import aspnet from "../media/aspnet.png";
import bootstrap from "../media/bootstrap.png";
import csharp from "../media/csharp.png";
import css from "../media/CSS.png";
import github from "../media/github.png";
import umbraco from "../media/umbraco.png";

export default function Project({ tagline, headline, description, image }) {
  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex align-items-center h-100">
              <div>
                <p className="tagline-tabs">{tagline}</p>
                <h2>{headline}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex align-items-center h-100 p-3">
              <img className="tabsimage" src={image} alt="profile"></img>
            </div>
          </div>
        </div>
        <div className="techstack">
          <p className="paragraphtechstack">
            Technologies:
            <img className="techlogo" src={js} />
            <img className="techlogo" src={html} />
            <img className="techlogo" src={css} />
            <img className="techlogo" src={bootstrap} />
            <img className="techlogo" src={aspnet} />
            <img className="techlogo" src={csharp} />
            <img className="techlogo" src={umbraco} />
          </p>
        </div>
      </div>
    </div>
  );
}
