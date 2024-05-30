import React from "react";
import "./ResourcesSection.css";

const resources = [
  {
    name: "Deferred Placement Policy",
    fileUrl:
      "https://spo.iitk.ac.in/docs/2021-22/deferred_placement_policy.pdf",
  },
  {
    name: "Placement Policy",
    fileUrl:
      "https://spo.iitk.ac.in/assets/2023-24/Placement_Policy_2023-24.pdf",
  },
  {
    name: "Internship Policy",
    fileUrl:
      "https://spo.iitk.ac.in/assets/2023-24/Internship-Policy-2023-24.pdf",
  },
  {
    name: "List of Companies",
    fileUrl: "https://spo.iitk.ac.in/docs/2021-22/List-of-companies.pdf",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources">
      <h2>Resources</h2>
      <div className="resources-container">
        {resources.map((resource, index) => (
          <div className="resource-item" key={index}>
            <a href={resource.fileUrl} download>
              {resource.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
