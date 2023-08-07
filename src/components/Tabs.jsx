import React, { useState } from "react";
import Project from "./Project";
import tamigo from "../media/tamigo.png";
import sogs from "../media/staunandstender-v2.png";
import js from "../media/JS.png";
import html from "../media/HTML.png";
import net from "../media/net-v2.png";
import bootstrap from "../media/bootstrap-v3.png";
import csharp from "../media/csharp-v2.png";
import css from "../media/CSS-v3.png";
import github from "../media/github-v2.png";
import umbraco from "../media/umbraco-v2.png";
import sql from "../media/SQL-v3.png";
import ssms from "../media/SSMS-v5.png";
import wordpress from "../media/WP-v2.png";
import silkeborgfadoel2 from "../media/SF logo.png";
import templafy from "../media/templafy.png";
import ownlogo from "../media/own-logo-v2.png";
import react from "../media/react-v2.png";
import node from "../media/node-v2.png";
import UnderConstruction from "../media/Under_construction_animated.gif";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("software");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //create a constant coaining all the media imports
  const pathsTamigo = [
    { id: 0, path: js, name: "JavaScript" },
    { id: 1, path: html, name: "HTML" },
    { id: 2, path: css, name: "CSS" },
    { id: 3, path: bootstrap, name: "Bootstrap" },
    { id: 4, path: umbraco, name: "Umbraco" },
    { id: 5, path: net, name: ".NET" },
    { id: 6, path: csharp, name: "C#" },
    { id: 7, path: github, name: "GitHub" },
  ];

  const linksTamigo = [
    { id: 0, link: "https://tamigo.com/pricing", name: "Pricing" },
    {
      id: 1,
      link: "https://tamigo.com/industries/supermarkets",
      name: "Industries",
    },
    { id: 2, link: "https://tamigo.com/", name: "Front page" },
    { id: 3, link: "https://tamigo.com/free-demo", name: "Demo" },
    { id: 4, link: "https://tamigo.de/blog", name: "Blog" },
    {
      id: 5,
      link: "https://www.tamigo.de/blog/so-spart-das-hotel-des-nordens-in-haupt-und-nebensaison-zeit-und-kosten/",
      name: "Blog post",
    },
  ];

  const pathsSogS = [
    { id: 0, path: js, name: "JavaScript" },
    { id: 1, path: sql, name: "SQL" },
    { id: 2, path: ssms, name: "Microsoft Sequel Server Management Studio" },
    { id: 3, path: html, name: "HTML" },
    { id: 4, path: css, name: "CSS" },
    { id: 5, path: github, name: "GitHub" },
  ];

  const linksSogS = [
    {
      id: 0,
      link: "https://github.com/sorenstaun/mood-jsextend",
      name: "GitHub",
    },
  ];

  const pathsTemplafy = [
    { id: 0, path: wordpress, name: "WordPress" },
    { id: 1, path: html, name: "HTML" },
    { id: 2, path: css, name: "CSS" },
  ];

  const linksTemplafy = [
    {
      id: 0,
      link: "https://www.templafy.com/",
      name: "Templafy",
    },
  ];

  const pathsSilkeborgFadoel = [
    { id: 0, path: wordpress, name: "WordPress" },
    { id: 1, path: css, name: "CSS" },
    { id: 2, path: html, name: "HTML" },
    { id: 3, path: js, name: "JavaScript" },
    { id: 4, path: github, name: "GitHub" },
  ];

  const linksSilkeborgFadoel = [
    {
      id: 0,
      link: "https://www.silkeborgfadoel.dk/",
      name: "Silkeborg Fadøl",
    },
    {
      id: 1,
      link: "https://github.com/Jepmoltho/Silkeborgfadoel.dk-Custom-Code-for-WordPress",
      name: "GitHub",
    },
  ];

  const pathsOwnSite = [
    { id: 0, path: react, name: "React" },
    { id: 1, path: js, name: "JavaScript" },
    { id: 2, path: node, name: "Node.js" },
    { id: 3, path: html, name: "HTML" },
    { id: 4, path: css, name: "CSS" },
    { id: 5, path: bootstrap, name: "Bootstrap" },
    { id: 6, path: github, name: "GitHub" },
  ];

  const linksOwnSite = [
    {
      id: 0,
      link: "https://github.com/Jepmoltho/jeppe-moelgaard.com",
      name: "GitHub",
    },
  ];

  const tempLinksJournalism = [
    {
      id: 0,
      link: "https://www.slush.org/article/game-developers-create-real-economies-with-blockchain-and-yes-you-can-make-money-from-it/",
      name: "Soaked",
      title: "Game developers create real economies with blockchain",
    },
    {
      id: 1,
      link: "http://emagstudio.win.dtu.dk/e-books/Dynamo/DYNAMO_51/page_9.html",
      name: "BTC",
      title: "New technology makes Bitcoin a real currency",
    },
    {
      id: 2,
      link: "http://emagstudio.win.dtu.dk/e-books/Dynamo/DYNAMO_54/page_14.html",
      name: "Cyber1",
      title: "The cyber threat can be turned to our advantage",
    },
    {
      id: 3,
      link: "http://emagstudio.win.dtu.dk/e-books/Dynamo/DYNAMO_54/page_16.html",
      name: "Cyber2",
      title: "Worlds biggest wind turbine",
    },
  ];

  const handleImageClick = (name) => {
    const flipper = document.querySelector(`.flipper${name}`);
    const front = document.querySelector(`.front${name}`);
    const back = document.querySelector(`.back${name}`);

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

  /*
  function handleImageClick() {
    const flipper = document.querySelector(".flipper");
    const front = document.querySelector(".front");
    const back = document.querySelector(".back");

    if (flipper.classList.contains("flipped")) {
      // If the flipper is already flipped, flip it back to the front side
      flipper.classList.remove("flipped");
      front.style.display = "block";
      back.style.display = "none";
    } else {
      // If the flipper is not flipped, flip it to the back side
      flipper.classList.add("flipped");
      front.style.display = "none";
      back.style.display = "block";
    }
  }
  */

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
                logos={pathsTamigo.map((humlebuks) => (
                  <div
                    className="flip-container"
                    onClick={() => handleImageClick(humlebuks.name)}
                  >
                    <div class={`flipper flipper${humlebuks.name}`}>
                      <div class={`front front${humlebuks.name}`}>
                        <img
                          src={humlebuks.path}
                          alt="logo"
                          key={humlebuks.key}
                          className="techlogo"
                          title={humlebuks.name}
                        />
                      </div>
                      <div class={`back back${humlebuks.name}`}>
                        <p className="flipped-text">{humlebuks.name}</p>
                      </div>
                    </div>

                    {/*
                    <div class="flipper">
                      <div class="front">
                        <img
                          src={humlebuks.path}
                          alt="logo"
                          key={humlebuks.key}
                          className="techlogo"
                          title={humlebuks.name}
                        />
                      </div>
                      <div class="back">
                        <p>{humlebuks.name}</p>
                      </div>
                    </div>
                    */}
                  </div>
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
                logos={pathsSogS.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                    title={humlebuks.name}
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
                logos={pathsOwnSite.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                    title={humlebuks.name}
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
                logos={pathsTemplafy.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                    title={humlebuks.name}
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
                logos={pathsSilkeborgFadoel.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                    title={humlebuks.name}
                  />
                ))}
              />
              {/*
              <Project
                tagline="www.jeppemølgaard.com"
                headline="Web Developer"
                description="With the fear of sounding extremely meta, I want to highlight my own site (this website) which i developed from scratch using React, JavaScript, HTML, CSS and Node.js."
                image={ownlogo}
                direction=""
                classname="ownlogo squareimg"
                projectnumber={4}
                animationId={5}
                animationIdMobile={4}
                hideImgOnMobile={true}
                key={4}
                links={linksOwnSite.map((link) => (
                  <p className="inline-p" key={link.id}>
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 0 ? " " : ", "}
                  </p>
                ))}
                logos={pathsOwnSite.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                    title={humlebuks.name}
                  />
                ))}
              />
                */}
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
                  <ul>
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
              {/*
              <JournalismProject
                headline={"Worlds biggest wind turbine"}
                image={vindturbine}
              />
          */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
