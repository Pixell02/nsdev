import AnimationLeft from "../../../components/AnimationLeft";
import { Translation } from "../../../components/Navbar";
import useLanguage from "../../../hooks/useLanguage";
import "./description.css";
import translate from "./translate/translate.json";

interface translationProps {
  firstPart: Translation;
  secondPart: Translation;
  header: Translation;
}

const Description = () => {

  const translation: translationProps = translate;
  const { currentLanguage } = useLanguage();

  return (
    <div className="description-container">
      <AnimationLeft>
        <p>
          {translation.firstPart[currentLanguage]}
        </p>
      </AnimationLeft>
      <AnimationLeft delay={0.5}>
        <p>
          <span style={{ fontSize: "25px" }}>{translation.header[currentLanguage]} </span>{translation.secondPart[currentLanguage]}</p>
      </AnimationLeft>
    </div>
  );
};

export default Description;
