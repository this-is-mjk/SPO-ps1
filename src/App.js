import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ResumeSample from "./components/resumeSample.js";
import PlacementSection from "./components/PlacementSection.js";
import ResourcesSection from "./components/ResourcesSection";
import FAQSection from "./components/FAQSection";
import Contact from "./components/contact.js";
import Roadmaps from "./components/roadMaps.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlacementSection />
      <ResourcesSection />
      <ResumeSample />
      <Roadmaps />
      <FAQSection />
      <Contact />
    </div>
  );
}

export default App;
