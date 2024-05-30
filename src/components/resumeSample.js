import React from "react";
import "./resumeSample.css";

const resumes = [
  { image: "resume1.jpg", name: "Resume 1", link:"https://www.google.com"},
  { image: "resume2.jpg", name: "Resume 2", link:"https://www.google.com" },
  { image: "resume3.jpg", name: "Resume 3", link:"https://www.google.com" },
  { image: "resume4.jpg", name: "Resume 4", link:"https://www.google.com" },
  { image: "resume5.jpg", name: "Resume 5", link:"https://www.google.com" },
  { image: "resume6.jpg", name: "Resume 6", link:"https://www.google.com" },

  // Add more resume items as needed
];

const ResumeSample = () => {
  return (
    <div>
    <h2>Sample Resumes</h2>
    <div className="resume-chain">
      {resumes.map((resume, index) => (
        <a href={resume.link}>
        <div key={index} className="resume-item">
          <img src={resume.image} alt="Resume" />
          <p>{resume.name}</p>
        </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default ResumeSample;
