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
    { id: 0, path: js },
    { id: 1, path: html },
    { id: 2, path: css },
    { id: 3, path: bootstrap },
    { id: 4, path: umbraco },
    { id: 5, path: net },
    { id: 6, path: csharp },
    { id: 7, path: github },
  ];

  const pathsSogS = [
    { id: 0, path: js },
    { id: 1, path: sql },
    { id: 2, path: ssms },
    { id: 3, path: html },
    { id: 4, path: css },
    { id: 5, path: github },
  ];

  const pathsTemplafy = [
    { id: 0, path: wordpress },
    { id: 1, path: html },
    { id: 2, path: css },
  ];

  const pathsSilkeborgFadoel = [
    { id: 0, path: wordpress },
    { id: 1, path: css },
    { id: 2, path: html },
    { id: 3, path: js },
    { id: 4, path: github },
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
                description="In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society. In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society."
                image={tamigo}
                projectnumber={0}
                logos={pathsTamigo.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                  />
                ))}
              />
              <Project
                tagline="Staun and Stender"
                headline="Developer and IT Management Consultant"
                description="In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society. In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society."
                image={sogs}
                direction="reverse"
                classname="sogslogo"
                projectnumber={1}
                //pass down the logos constant to the project component
                logos={pathsSogS.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
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
                logos={pathsTemplafy.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
                  />
                ))}
              />
              <Project
                tagline="Silkeborg Fadøl"
                headline="Web Developer"
                description="In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society. In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society."
                image={silkeborgfadoel2}
                direction="reverse"
                classname="silkeborgfadoellogo"
                projectnumber={3}
                //pass down the logos constant to the project component
                logos={pathsSilkeborgFadoel.map((humlebuks) => (
                  <img
                    src={humlebuks.path}
                    alt="logo"
                    key={humlebuks.key}
                    className="techlogo"
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
