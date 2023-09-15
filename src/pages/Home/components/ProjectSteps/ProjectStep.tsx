import { useState } from "react";
import AnimationHeight from "../../../../components/AnimationHeight";
import AnimationScaling from "../../../../components/AnimationScaling";
import { Translation } from "../../../../components/Navbar";
import useLanguage from "../../../../hooks/useLanguage";
import useWidth from "../hooks/useWidth";
import translate from "../translate/projectStepsTranslate.json";

interface translateProps {
  stepOne: Translation;
  stepTwo: Translation;
  stepThree: Translation;
}
interface StepProps {
  step: string;
  selectedStep: string;
  setSelectedStep: (step: string) => void;
}

const ProjectStep: React.FC<StepProps> = ({
  step,
  selectedStep,
  setSelectedStep,
}) => {
  const windowWidth = useWidth();
  const [isHover, setIsHover] = useState(false);

  const { currentLanguage } = useLanguage();
  const translation: translateProps = translate;

  return (
    <div className="step">
      <AnimationScaling>
        {selectedStep !== step && (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setSelectedStep(step)}
            className={
              selectedStep !== step || isHover
                ? "step-circle"
                : "colored-circle"
            }
          >
            <p>{step}</p>
          </div>
        )}
        {selectedStep === step && windowWidth > 1000 && (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setSelectedStep(step)}
            className={
              selectedStep !== step || isHover
                ? "step-circle"
                : "colored-circle"
            }
          >
            <p>{step}</p>
          </div>
        )}
        {windowWidth < 1000 && (
          <>
            <div
              className={
                selectedStep === "1" && selectedStep === step
                  ? "description-container"
                  : "none-description-container"
              }
            >
              <p className="mb-2">{translation.stepOne[currentLanguage]}</p>
            </div>
            <div
              className={
                selectedStep === "2" && selectedStep === step
                  ? "description-container"
                  : "none-description-container"
              }
            >
              <p className="mb-2">{translation.stepTwo[currentLanguage]}</p>
            </div>

            <div
              className={
                selectedStep === "3" && selectedStep === step
                  ? "description-container"
                  : "none-description-container"
              }
            >
              <p className="mb-2">{translation.stepThree[currentLanguage]}</p>
            </div>
          </>
        )}
      </AnimationScaling>
      {(step !== "3" || windowWidth > 1000) && (
        <>
          <AnimationHeight>
            <div className="hor-line" />
          </AnimationHeight>
          <AnimationHeight>
            <div className="hor-line" />
          </AnimationHeight>
          <AnimationHeight>
            <div className="hor-line" />
          </AnimationHeight>
        </>
      )}
    </div>
  );
};

export default ProjectStep;
