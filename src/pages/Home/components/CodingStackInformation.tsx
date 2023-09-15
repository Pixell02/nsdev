import { useRef, useState } from "react";
import electron from "../../../assets/electron.png";
import firebase from "../../../assets/firebase.png";
import node from "../../../assets/node.png";
import react from "../../../assets/react-logo.png";
import typescript from "../../../assets/typescript.png";
import AnimationHoverScaling from "../../../components/AnimationHoverScaling";
import AnimationScaling from "../../../components/AnimationScaling";
import AnimationWidth from "../../../components/AnimationWidth";
import { Translation } from "../../../components/Navbar";
import useLanguage from "../../../hooks/useLanguage";
import "./codingStackInformation.css";
import translate from "./translate/codingStackTranslate.json";

interface translateProps {
  react: Translation;
  electron: Translation;
  typeScript: Translation;
  node: Translation;
  firebase: Translation;
}

const CodingStackInformation = () => {
  const [description, setDescription] = useState("");
  const translation: translateProps = translate;
  const {currentLanguage} = useLanguage()
  const images = [
    { img: electron, name: translation.electron[currentLanguage] },
    { img: typescript, name: translation.typeScript[currentLanguage] },
    { img: react, name: translation.react[currentLanguage] },
    { img: node, name: translation.node[currentLanguage] },
    { img: firebase, name: translation.firebase[currentLanguage] }
  ];

  const imageRef = useRef(null);

  return (
    <div className="d-flex w-100 code-stack-info flex-column">
      <div className="circle-container">
        <AnimationScaling>
        <div className="circle">
          {images.map((imageData, i) => (
            <div
              key={i}
              className="image-container"
              style={{
                transform: `rotate(${(360 / images.length) * i}deg) translateX(150px) rotate(-${(360 / images.length) * i
                  }deg)`,
              }}
            >
              <AnimationScaling delay={0.5 + 0.1 * i}>
                <AnimationHoverScaling>
              <img
                src={imageData.img}
                ref={imageRef}
                onMouseEnter={() => setDescription(imageData.name)}
                onMouseLeave={() => setDescription("")}
                id={`${i}`}
                className="image"
                alt={`Image ${i}`}
              />
              </AnimationHoverScaling>
              </AnimationScaling>
            </div>
            
          ))}
        </div>
        </AnimationScaling>
      </div>
      <AnimationWidth>
      <div className="library-description">
        <p>{description}</p>
      </div>
      </AnimationWidth>
    </div>
  );
};

export default CodingStackInformation;
