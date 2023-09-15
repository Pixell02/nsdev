import { useState } from "react";
import AnimationLeft from "../../../components/AnimationLeft";
import AnimationWidth from "../../../components/AnimationWidth";
import useLanguage from "../../../hooks/useLanguage";
import DescriptionContent from "./DescriptionContent";
import ProjectStep from "./ProjectSteps/ProjectStep";
import useWidth from "./hooks/useWidth";
import "./projectSteps.css";

const ProjectSteps = () => {

  const [selectedStep, setSelectedStep] = useState("1");
  const {currentLanguage} = useLanguage();
  const windowWidth = useWidth();
  const addLines = () => {
    const lines = [];
    for (let i = 0; i <= windowWidth/40; i++) {
      lines.push(<div key={i} className="d-flex line align-items-center"></div>);
    }
    return lines;
  };

  return (
    <div className="project-steps-container">
      <AnimationLeft>
      <div className="title-container">
        <h1>{currentLanguage === "pl" ? "Etapy realizacji projektu" : "Stages of project implementation"}</h1>
      </div>
      </AnimationLeft>
      <AnimationWidth>
        {windowWidth > 1000 && (
          <div className="description-container">
        <DescriptionContent selectedStep={selectedStep} />
      </div>
        )}
      
      </AnimationWidth>
      
      <div className="steps-container">
        <ProjectStep step="1" selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
        <ProjectStep step="2" selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
        <ProjectStep step="3" selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
      </div>
      <AnimationWidth>
      <div className="steps-line-connect">
        {addLines()}
      </div>
      </AnimationWidth>
    </div>
  );
};

export default ProjectSteps;
