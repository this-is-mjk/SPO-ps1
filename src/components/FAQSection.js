import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "What are the restrictions on resume format?",
    answer:
      "There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order.1",
  },
  {
    question: "What should be the name of the resume file (one page)?2",
    answer:
      "The resume file should be named as RollNumber_Name__Program_Department_ResumeNumber. For example, a student with the following details: Roll number: 190351, Name: Gyanendra Kumar, Program - BTech(BT), Department : Mechanical(ME) should name the resume files as 190351_Gyanendra_BT_ME_1, 190351_Gyanendra_BT_ME_2, 190351_Gyanendra_BT_ME_3.",
  },
  {
    question:
      "How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?",
    answer:
      "JEE Mains/JEE Adv. ranks have to be mentioned in the numbers, not percentile. For eg, AIR 1234 in JEE Mains 2019. If someone wants to mention their rank in their department, a mail from the HoD of the department is required. Definitely mention the year of Activity or Achievement.",
  },
  {
    question: "When is a Project Verification Form (PVF) required?",
    answer:
      "A PVF is needed to be signed by your mentor for any intern/project done under an IITK professor or any external organization (no PVF is needed for projects under institute clubs or course projects). Kindly ask your mentor/Guide to send the filled PVF from his/her official email address to spoproofs2022@gmail.com. Only PVFs received on the given ID will be considered. Also, ask your mentor to mark you in cc. The PVF can be downloaded from here (spo.iitk.ac.in/docs/2021-22/PVF.doc). The subject and content of the project written on your resume should match that written on the PVF.",
  },
  {
    question: "How will my PoR/projects under the institute clubs be verified?",
    answer:
      "PoR and projects under Clubs/Teams of IITK (summer projects as well) will be ratified through the lists sent by PSG, Senate Chairperson, MnC Gensec, or SnT Gensec.",
  },
  {
    question: "I have some Self projects, how will they be verified?",
    answer:
      "For verification of such projects, one has to submit codes/git repo links/ (or any other proof) as deemed necessary. You will have to clearly mention that the project is a self-project.",
  },
  {
    question: "How to verify online courses/online projects?",
    answer:
      "For verification of online courses/online projects, you will need to submit the pdf certificate issued by the concerned organization. While mentioning the same on your resume, you will have to specify that the course/project was an online course/project.",
  },
  {
    question: "Is proof required for Extracurricular points?",
    answer:
      "The proof is not required for points under this heading unless they specify a certain position ex. Got 2nd place in School debate competitions.",
  },
  {
    question:
      "My internship/project is ongoing and will not be finished before resume submission. What should I do?",
    answer:
      "Fill up the PVF with whatever work has been completed and ask your mentor to sign and send it to spoproofs2022@gmail.com. You will have to mention in the resume that the internship/project is ongoing.",
  },
  {
    question: "Can I update my resume after the deadline?",
    answer:
      "No, after the resume has been verified it will not be changed. The resume can only be updated in Phase-2 of the internship/placement season.",
  },
  {
    question: "Will the Summer CPI be included?",
    answer:
      "Whatever CPI is there on Pingala during resume verification will be taken as final.",
  },
  // Add more objects as needed
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="faq">
      <h2>FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <button className="question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {expandedIndex === index && (
              <div className="answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
