import React, { useState } from "react";
import Project from "./Project";
import tamigo from "../media/tamigo.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("software");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabscomponent">
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
            />
            <Project
              tagline="Staun and Stender"
              headline="Developer and IT Management Consultant"
              description="In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society. In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society."
              image={tamigo}
              direction="reverse"
            />
          </div>
        )}
        {activeTab === "journalism" && (
          <div className="content">
            {/* Content for Journalism tab */}
            <p>
              In the field of Journalism, I have a passion for storytelling and
              reporting on important events and stories that impact society.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
