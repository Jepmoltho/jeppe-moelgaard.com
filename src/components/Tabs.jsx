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

  return (
    <div className="tabscomponent">
      <div>
        <h2 className="componentheadline">Portfolio</h2>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "software" ? "active" : ""}`}
            onClick={() => handleTabClick("software")}
          >
            Software Developer
          </div>
          <div
            className={`tab ${activeTab === "journalism" ? "active" : ""}`}
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
                links={linksTamigo.map((link) => (
                  <p className="inline-p">
                    <a href={link.link} target="__blank">
                      {link.name}
                    </a>
                    {link.id === 5 ? " " : ","}{" "}
                  </p>
                ))}
                logos={pathsTamigo.map((humlebuks) => (
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
                tagline="Staun and Stender"
                headline="Developer and IT Management Consultant"
                description="I develop interactive web applications for enterprises to manage data in an Enterprise Architecture Relational Database framework. Responsibilities include developing web applications and creating a code library using custom JavaScript, HTML & CSS. Futher, I used a DBMS and SQL to transfer and manipulate data between systems"
                image={sogs}
                direction="reverse"
                classname="sogslogo"
                projectnumber={1}
                //pass down the logos constant to the project component
                links={linksSogS.map((link) => (
                  <p className="inline-p">
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
              <Project
                tagline="Templafy"
                headline="Website Specialist"
                description="In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society. In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society."
                image={templafy}
                direction=""
                classname="templafylogo"
                projectnumber={2}
                //pass down the logos constant to the project component
                links={linksTemplafy.map((link) => (
                  <p className="inline-p">
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
                direction="reverse"
                classname="silkeborgfadoellogo"
                projectnumber={3}
                //pass down the logos constant to the project component
                links={linksSilkeborgFadoel.map((link) => (
                  <p className="inline-p">
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
            </div>
          )}
          {activeTab === "journalism" && (
            <div className="content">
              {/* Content for Journalism tab */}
              <p>
                In the field of Journalism, I have a passion for storytelling
                and reporting on important events and stories that impact
                society.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
