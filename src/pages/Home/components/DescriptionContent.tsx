import React from 'react';
import { Translation } from '../../../components/Navbar';
import useLanguage from '../../../hooks/useLanguage';
import translate from "./translate/projectStepsTranslate.json";

interface descriptionProps {
  selectedStep: string;
}
interface translateProps {
  stepOne: Translation;
  stepTwo: Translation;
  stepThree: Translation;
}

const DescriptionContent:React.FC<descriptionProps> = ({selectedStep}) => {

  const {currentLanguage} = useLanguage();
  const translation: translateProps = translate;

  return (
    <>
        {selectedStep === "1" && <p className='mb-2'>
        {translation.stepOne[currentLanguage]}
        </p>}
        {selectedStep === "2" && <p className='mb-2'>
          {translation.stepTwo[currentLanguage]}
        </p>}
        {selectedStep === "3" && <p className='mb-2'>
          {translation.stepThree[currentLanguage]}
        </p>}
    </>
  )
}

export default DescriptionContent
