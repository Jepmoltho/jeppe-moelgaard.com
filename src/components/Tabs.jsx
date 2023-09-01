import React, { useState, useEffect, useRef } from "react";
import Project from "./Project.tsx";
import JournalismProject from "./JournalismProject.tsx";
import TechLogo from "./Techlogo";
import tamigo from "../media/tamigo.png";
import github from "../media/github.png";
import silkeborgfadoel2 from "../media/SF logo.png";
import templafy from "../media/templafy.png";
import ownlogo from "../media/own-logo-v2.png";
import useScrollObserverLessSensitive from "../hooks/useScrollObserverLessSensitive";
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
import { journalism } from "../data/journalism.jsx";
import BackToTopButton from "./BackToTop.tsx";
import BackToTopButtonJournalism from "./BackToTopJournalism.tsx";

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
    setBounceHasClicked(true);
  };

  const [bounceHasClicked, setBounceHasClicked] = useState(false);
  const [hasBouncedTwo, setHasBouncedTwo] = useState(false);
  const [hasBouncedThree, setHasBouncedThree] = useState(false);

  const animationContainerRefTamigo = useRef();

  const animationContainerRefSogS = useRef();
  const isVisibleSogS = useScrollObserverLessSensitive(
    animationContainerRefSogS
  );
  const animationContainerRefOwnSite = useRef();
  const isVisibleOwnSite = useScrollObserverLessSensitive(
    animationContainerRefOwnSite
  );

  //prettier-ignore
  useEffect(() => {
    const bounceindex = Math.floor(Math.random() * pathsSogS.length) % pathsSogS.length;
    if (isVisibleSogS && bounceHasClicked === false && hasBouncedTwo === false) {
      document.getElementsByClassName("tab-journalism-headline")[0].style.pointerEvents = "none";
      setTimeout(() => {
        const elementToAnimate = document.getElementsByClassName("bounce-element-sogs")[bounceindex];
        elementToAnimate.classList.add("bounce");
        document.getElementsByClassName("tab-journalism-headline")[0].style.pointerEvents = "auto";
      }, 2000);
      setHasBouncedTwo(true);
    }
  }, [isVisibleSogS, bounceHasClicked, setBounceHasClicked, hasBouncedTwo, setHasBouncedTwo]);

  //prettier-ignore
  useEffect(() => {
    const bounceindex = Math.floor(Math.random() * pathsOwnSite.length) % pathsOwnSite.length;
      if (isVisibleOwnSite && bounceHasClicked === false && hasBouncedThree === false) {
        document.getElementsByClassName("tab-journalism-headline")[0].style.pointerEvents = "none";
        setTimeout(() => {
        const elementToAnimate = document.getElementsByClassName("bounce-element-ownsite")[bounceindex];
        elementToAnimate.classList.add("bounce");
        document.getElementsByClassName("tab-journalism-headline")[0].style.pointerEvents = "auto";
      }, 2000);
      setHasBouncedThree(true);
    }
  }, [isVisibleOwnSite, bounceHasClicked, setBounceHasClicked, hasBouncedThree, setHasBouncedThree]);

  return (
    <div className="tabscomponent ">
      <div>
        <h2 className="componentheadline Montserrat">Portfolio</h2>
      </div>
      <div className="tabs-container">
        <div className="tabs ">
          <div
            className={`tab tab-software-headline ${
              activeTab === "software" ? "active" : ""
            }`}
            onClick={() => handleTabClick("software")}
          >
            Software Developer
          </div>
          <div
            className={`tab tab-journalism-headline  ${
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
              <div className="scrollspacer"></div>
              <Project
                tagline="tamigo"
                headline="Frontend Developer"
                description="I developed reusable components & landing pages for all screen types and injected content from multiple domains."
                image={tamigo}
                imageLink="https://www.tamigo.com/pricing"
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
                    animationContainerRef={animationContainerRefTamigo}
                  />
                ))}
              />
              {/*<div className="scrollspacer"></div>*/}
              <Project
                tagline="Staun and Stender"
                headline="Developer and IT Consultant"
                description="I develop interactive web applications for enterprises to manage data in an Enterprise Architecture Relational Database framework. Responsibilities include developing web applications and creating a code library using custom JavaScript, HTML & CSS. Futher, I used a DBMS and SQL to transfer and manipulate data between systems"
                image={github}
                imageLink="https://github.com/Jepmoltho/mood-jsextend"
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
                    animationContainerRef={animationContainerRefSogS}
                  />
                ))}
              />
              <Project
                tagline="www.jeppemølgaard.com"
                headline="Web Developer"
                description="I developed this website from scratch using React, TypeScript, JavaScript, HTML, CSS and Node.js. It is still under development."
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
                    animationContainerRef={animationContainerRefOwnSite}
                  />
                ))}
              />
              <Project
                tagline="Templafy"
                headline="Website Specialist"
                description="I updated and rebuild all Templafy's 300+ landing pages (and HubSpot pages) to WordPress 5.3+ spanning over three diffrenent project."
                image={templafy}
                imageLink={"https://www.templafy.com/"}
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
                imageLink={"https://silkeborgfadoel.dk/"}
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
              <BackToTopButton />
            </div>
          )}
          {activeTab === "journalism" && (
            <div className="journalism-content-container">
              <div className="spacer"></div>
              <div className="journalism-content">
                {journalism.map((project) => (
                  <JournalismProject
                    key={project.id}
                    headline={project.title}
                    image={project.image}
                    publisher={project.publisher}
                    link={project.link}
                    date={project.date}
                    /*animationRef={JournalismProjectRef}*/
                  />
                ))}
                <BackToTopButtonJournalism />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

/*
  const JournalismProjectRef = useRef();
  const isVisibleJournalismProject =
    useScrollObserverLessSensitive(JournalismProjectRef);

  useEffect(() => {
    console.log("isVisibleJournalismProject", isVisibleJournalismProject);
    if (JournalismProjectRef.current) {
      const journalismCardElement = JournalismProjectRef.current;
      journalismCardElement.classList.add("journalism-card-animation");
      console.log("journalismCardElement", journalismCardElement);
    }
  }, [JournalismProjectRef, isVisibleJournalismProject]);
  */
