export default function Project({
  tagline,
  headline,
  description,
  image,
  direction,
  classname,
  logos,
  projectnumber,
}) {
  const isReverse = `flex-row${direction === "reverse" ? "-reverse" : ""}`;
  const isReverseBool = direction === "reverse";

  const textContainerPadding = {
    paddingRight: isReverseBool ? "00px" : "60px",
    paddingLeft: isReverseBool ? "60px" : "0px",
  };

  const projectNumber = `project-${projectnumber}`;

  return (
    <div className={` project ${projectNumber}`}>
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
              <img
                className={`tabsimage ${classname}`}
                src={image}
                alt="profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Move this one div up if its causing problems*/}
      <div className="techstack-container">
        <div className="techstack">
          <p className="paragraphtechstack">Techstack:</p>
          <div>{logos}</div>
        </div>
      </div>
    </div>
  );
}
