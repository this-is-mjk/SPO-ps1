import React from "react";
import "./PlacementSection.css";

const placementData = [
  {
    name: "Abhinav Agarwal",
    company: "Piramal",
    dos: "Practice more and more depending upon the profile",
    donts: "Don’t mug up and rather focus on the concepts.",
    link: "https://spo.iitk.ac.in/insights/2023-placement-abhinav-agarwal-piramal",
  },
  {
    name: "Abhinav D Singh ",
    company: "McKinsey & Company",
    dos: "refrain from showingyour inclination or preference towards other companies",
    donts: "Don't neglect your soft skills.",
    link: "https://spo.iitk.ac.in/insights/2023-placement-abhinav-d-singh-mckinsey--company",
  },
  {
    name: "Aditi",
    company: "Rakuten Mobile",
    dos: "Practising with your friends would help you know different approaches to a particular question as well as it will keep you motivated and boosted.",
    donts: "Don't forget to rest before the interview.",
    link: "https://spo.iitk.ac.in/insights/2023-placement-aditi-rakuten-mobile",
  },
  {
    name: "Anuj Gupta",
    company: "Texas Instruments",
    dos: "Practising with your friends would help you know different approaches to a particular question as well as it will keep you motivated and boosted.",
    donts: "Don't forget to rest before the interview.",
    link: "https://spo.iitk.ac.in/insights/2023-placement-aditi-rakuten-mobile",
  },
  {
    name: "Anurag Tyagi",
    company: "Texas Instruments",
    dos: "Coding practice is the key to success in placements.",
    donts: "Don’t add points in your resume to fill it up.",
    link: "https://spo.iitk.ac.in/insights/2023-placement-anurag-tyagi-walmart-global-tech",
  },

  // Add more placements as needed
];

const PlacementSection = () => {
  return (
    <section id="placementSection">
      <h2>Placement Talks</h2>
      <div className="cards-container">
        {placementData.map((placement, index) => (
          <div key={index} className="card">
            <h3>{placement.name}</h3>
            <p>
              <strong>Company:</strong> {placement.company}
            </p>
            <p>
              <strong>Do's:</strong> {placement.dos}
            </p>
            <p>
              <strong>Don'ts:</strong> {placement.donts}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacementSection;
