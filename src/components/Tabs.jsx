import React, { useState } from "react";
import Project from "./Project";
import TechLogo from "./Techlogo";
import tamigo from "../media/tamigo.png";
import sogs from "../media/staunandstender-v2.png";
import silkeborgfadoel2 from "../media/SF logo.png";
import templafy from "../media/templafy.png";
import ownlogo from "../media/own-logo-v2.png";
import UnderConstruction from "../media/Under_construction_animated.gif";
import {
  pathsTamigo,
  pathsSogS,
  pathsOwnSite,
  pathsSilkeborgFadoel,
  pathsTemplafy,
} from "../data/techstack.jsx";
import {
  linksTamigo,
  linksSogS,
  linksTemplafy,
  linksSilkeborgFadoel,
  linksOwnSite,
} from "../data/links.jsx";
import { tempLinksJournalism } from "../data/journalism.jsx";

const Tabs = () => {
  //Tab switch logic
  const [activeTab, setActiveTab] = useState("software");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //Logo flip logic - passed to TechLogo component
  const handleImageClick = (name, parent) => {
    const flipper = document.querySelector(`.flipper-${name}-${parent}`);
    const front = document.querySelector(`.front-${name}-${parent}`);
    const back = document.querySelector(`.back-${name}-${parent}`);

    if (flipper.classList.contains("flipped")) {
      // If the flipper is already flipped, flip it back to the front side
      flipper.classList.remove("flipped");
      front.style.display = "flex";
      back.style.display = "none";
    } else {
      // If the flipper is not flipped, flip it to the back side
      flipper.classList.add("flipped");
      front.style.display = "none";
      back.style.display = "flex";
    }
  };

  return (
    <div className="tabscomponent">
      <div>
        <h2 className="componentheadline">Portfolio</h2>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab tab-software-headline ${
              activeTab === "software" ? "active" : ""
            }`}
            onClick={() => handleTabClick("software")}
          >
            Software Developer
          </div>
          <div
            className={`tab tab-journalism-headline ${
              activeTab === "journalism" ? "active" : ""
            }`}
            onClick={() => handleTabClick("journalism")}
          >
            Journalism
          </div>
        </div>
        <div className="content-container">
          {activeTab === "software" && (
            <div className="content">
              <Project
                tagline="tamigo"
                headline="Frontend Developer"
                description="I develop and maintain tamigo's website in the Umbraco framework. I developed multiple reusable components & landing pages using HTML, CSS & JavaScript and optimize design for desktop/mobile/tablet using media queries & Bootstrap."
                image={tamigo}
                projectnumber={0}
                animationId={1}
                animationIdMobile={0}
                key={0}
                links={linksTamigo.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 5 ? " " : ","}{" "}
                  </p>
                ))}
                //pass down the data from the techstack json file to the logos prop
                logos={pathsTamigo.map((logo) => (
                  <TechLogo
                    key={logo.id}
                    logo={logo}
                    handleImageClick={handleImageClick}
                  />
                ))}
              />
              <Project
                tagline="Staun and Stender"
                headline="Developer and IT Management Consultant"
                description="I develop interactive web applications for enterprises to manage data in an Enterprise Architecture Relational Database framework. Responsibilities include developing web applications and creating a code library using custom JavaScript, HTML & CSS. Futher, I used a DBMS and SQL to transfer and manipulate data between systems"
                image={sogs}
                direction="reverse"
                classname="sogslogo squareimg"
                projectnumber={1}
                animationId={2}
                animationIdMobile={1}
                hideImgOnMobile={true}
                key={1}
                //pass down the logos constant to the project component
                links={linksSogS.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 0 ? " " : ","}{" "}
                  </p>
                ))}
                logos={pathsSogS.map((logo) => (
                  <TechLogo
                    key={logo.id}
                    logo={logo}
                    handleImageClick={handleImageClick}
                  />
                ))}
              />
              <div className="scrollspacetall"></div>
              <Project
                tagline="www.jeppemølgaard.com"
                headline="Web Developer"
                description="With the fear of sounding extremely meta, I want to highlight my own site (this website) which i developed from scratch using React, JavaScript, HTML, CSS and Node.js."
                image={ownlogo}
                direction=""
                classname="ownlogo squareimg"
                projectnumber={2}
                animationId={3}
                animationIdMobile={2}
                hideImgOnMobile={true}
                key={2}
                scrollSpacer={true}
                links={linksOwnSite.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 0 ? " " : ", "}
                  </p>
                ))}
                logos={pathsOwnSite.map((logo) => (
                  <TechLogo
                    key={logo.id}
                    logo={logo}
                    handleImageClick={handleImageClick}
                  />
                ))}
              />
              <Project
                tagline="Templafy"
                headline="Website Specialist"
                description="I updated and rebuild all Templafy's 300+ landing pages (and HubSpot pages) to WordPress 5.3+ spanning over three diffrenent project."
                image={templafy}
                direction="reverse"
                classname="templafylogo"
                projectnumber={3}
                animationId={4}
                animationIdMobile={3}
                key={3}
                //pass down the logos constant to the project component
                links={linksTemplafy.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 0 ? " " : ","}{" "}
                  </p>
                ))}
                logos={pathsTemplafy.map((logo) => (
                  <TechLogo
                    key={logo.id}
                    logo={logo}
                    handleImageClick={handleImageClick}
                  />
                ))}
              />
              <Project
                tagline="Silkeborg Fadøl"
                headline="Web Developer"
                description="I design and develop Silkeborg Fadøls webpage in WordPress. I develop custom JavaScript, CSS & HTML to improve chosen theme and to improve page design for mobile view"
                image={silkeborgfadoel2}
                direction=""
                classname="silkeborgfadoellogo squareimg"
                projectnumber={4}
                animationId={5}
                animationIdMobile={4}
                hideImgOnMobile={true}
                key={4}
                //pass down the logos constant to the project component
                links={linksSilkeborgFadoel.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 1 ? " " : ", "}
                  </p>
                ))}
                logos={pathsSilkeborgFadoel.map((logo) => (
                  <TechLogo
                    key={logo.id}
                    logo={logo}
                    handleImageClick={handleImageClick}
                  />
                ))}
              />
            </div>
          )}
          {activeTab === "journalism" && (
            <div className="content">
              {/* Content for Journalism tab */}
              <div className="construction-container">
                <img
                  src={UnderConstruction}
                  alt="Under construction"
                  className="construction-image"
                ></img>
              </div>
              <center>
                <div className="constructions-text-container">
                  <p className="construction-text">
                    The aestetics of this page is still under development. In
                    the meantime, you can check some of my journalism projects
                    by clicking the links below:
                  </p>
                </div>
              </center>
              <div className="journalism-links-container">
                <center>
                  <ul className="linksul">
                    {tempLinksJournalism.map((link) => (
                      <div className="journalism-link-container" key={link.id}>
                        <a href={link.link} target="__blank">
                          <p>{link.title}</p>
                        </a>
                      </div>
                    ))}
                  </ul>
                </center>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
