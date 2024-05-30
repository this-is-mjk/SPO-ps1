import React from "react";
import "./roadMaps.css";

const roadmap = [
  {
    name: "Mechanical Core",
    fileUrl: "https://spo.iitk.ac.in/assets/Roadmap_ME.pdf",
  },
  {
    name: "Electrical Core",
    fileUrl: "https://spo.iitk.ac.in/assets/Roadmap_EE.pdf",
  },
  {
    name: "Analyst",
    fileUrl: "https://spo.iitk.ac.in/assets/Roadmap_Analytics.pdf",
  },
  {
    name: "SDE",
    fileUrl: "https://spo.iitk.ac.in/assets/Roadmap_SDE.pdf",
  },
];

const Roadmaps = () => {
  return (
    <section id="Roadmap">
      <h2>Roadmaps</h2>
      <div className="roadmap-container">
        {roadmap.map((roadmap, index) => (
          <div className="roadmap-item" key={index}>
            <a href={roadmap.fileUrl} download>
              {roadmap.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmaps;
