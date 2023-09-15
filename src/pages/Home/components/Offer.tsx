import AnimationLeft from "../../../components/AnimationLeft";
import AnimationTop from "../../../components/AnimationTop";
import { Translation } from "../../../components/Navbar";
import useLanguage from "../../../hooks/useLanguage";
import translate from "./translate/offerTranslate.json";

interface props {
header: Translation;
boldOne: Translation;
boldTwo: Translation;
descriptionOne: Translation;
descriptionTwo: Translation;
footer: Translation;
}

interface optionProps {
  name: string;
  description: string;
}

const Offer = () => {

  const {currentLanguage} = useLanguage();
  const translation: props = translate;

  const options = [
    {name: translation.boldOne[currentLanguage], description: translation.descriptionOne[currentLanguage]},
    {name: translation.boldTwo[currentLanguage], description: translation.descriptionTwo[currentLanguage]}
  ]

  return (
    <div className="offer-container">
      <AnimationLeft delay={0.2}>
      <h3>{translation.header[currentLanguage]}</h3>
      </AnimationLeft>
      {options.map((item: optionProps, i: number) => (
        <AnimationTop key={i} delay={0.4 + (i * 0.2)}>
          <p>
            ✅<b>{item.name} </b>{item.description}
          </p>
        </AnimationTop>
      ))}
      <AnimationTop delay={options.length * 0.2 + 0.2}>
      <p>
      {translation.footer[currentLanguage]}
      </p>
      </AnimationTop>
    </div>
  )
}

export default Offer
