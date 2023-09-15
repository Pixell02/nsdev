import React from "react";
import AnimationScaling from "../../../components/AnimationScaling";
import AnimationTop from "../../../components/AnimationTop";
import AnimationWidth from "../../../components/AnimationWidth";
import useLanguage from "../../../hooks/useLanguage";
import "./clientsLogos.css";
import { imageProps } from "./hooks/useClientLogos";
import useImageContext from "./hooks/useImageContext";

const ClientsLogos: React.FC = () => {
  const { images } = useImageContext();
  const {currentLanguage} = useLanguage();
  return (
    <div className="d-flex w-100 align-items-center justify-content-center flex-column">
      <AnimationTop>
        <h1>{currentLanguage === "pl" ? "Zaufali mi" : "They trusted me"}</h1>
      </AnimationTop>
      <AnimationWidth>
        <div className="d-flex flex-row logo-container">
          {images?.map((image: imageProps, i: number) => (
            <AnimationScaling key={i} delay={i * 0.25}>
              <img src={image.src} alt={`logo-${i}`} />
            </AnimationScaling>
          ))}
        </div>
      </AnimationWidth>
    </div>
  );
};

export default ClientsLogos;
