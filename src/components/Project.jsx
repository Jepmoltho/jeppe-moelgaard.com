//import myImage from "../media/profile-picture-v2.png";
import js from "../media/JS.png";
import html from "../media/HTML.png";
import net from "../media/net-v2.png";
import bootstrap from "../media/bootstrap-v3.png";
import csharp from "../media/csharp-v2.png";
import css from "../media/CSS-v3.png";
import github from "../media/github-v2.png";
import umbraco from "../media/umbraco-v2.png";

export default function Project({
  tagline,
  headline,
  description,
  image,
  direction,
}) {
  const isReverse = `flex-row${direction === "reverse" ? "-reverse" : ""}`;
  const isReverseBool = direction === "reverse";

  const textContainerPadding = {
    paddingRight: isReverseBool ? "00px" : "40px",
    paddingLeft: isReverseBool ? "40px" : "0px",
  };

  return (
    <div className="project">
      <div className="container project-container">
        <div className={`row ${isReverse}`}>
          <div
            className="col-md-7 project-text-container"
            style={textContainerPadding}
          >
            <div className="d-flex align-items-center h-100">
              <div>
                <p></p>
                <p className="tagline-tabs">{tagline}</p>
                <h2>{headline}</h2>
                <p>{description}</p>
                <div className="links">
                  <p className="inline-p">Links: </p>
                  <p className="inline-p">Pricing, </p>
                  <p className="inline-p">Industries, </p>
                  <p className="inline-p">Front page, </p>
                  <p className="inline-p">Demo, </p>
                  <p className="inline-p">Blog, </p>
                  <p className="inline-p">Blog post, </p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-5 project-image-parent-container">
            <div className="d-flex align-items-center h-100">
              <img className="tabsimage" src={image} alt="profile"></img>
            </div>
          </div>
        </div>
      </div>
      {/* Move this one div up if its causing problems*/}
      <div className="techstack-container">
        <div className="techstack">
          <p className="paragraphtechstack">Techstack:</p>
          <div>
            <img className="techlogo" alt="js logo" src={js} />
            <img className="techlogo" alt="html logo" src={html} />
            <img className="techlogo" alt="css logo" src={css} />
            <img className="techlogo" alt="bootstrap logo" src={bootstrap} />
            <img className="techlogo" alt=".net logo" src={net} />
            <img className="techlogo" alt="c# logo" src={csharp} />
            <img className="techlogo" alt="umbraco logo" src={umbraco} />
            <img className="techlogo" alt="github logo" src={github} />
          </div>
        </div>
      </div>
    </div>
  );
}
