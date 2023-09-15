import ContentContainer from "../../components/ContentContainer";
import LoadingScreen from "../../components/LoadingScreen";
import Navbar, { Translation } from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import useLanguage from "../../hooks/useLanguage";
import TransitionText from "./TransitionText";
import ClientsLogos from "./components/ClientsLogos";
import CodingStackInformation from "./components/CodingStackInformation";
import Description from "./components/Description";
import MailButton from "./components/MailButton";
import Offer from "./components/Offer";
import ProjectSteps from "./components/ProjectSteps";
import useImageContext from "./components/hooks/useImageContext";
import translate from "./components/translate/homePageTranslate.json";
import "./homePage.css";

interface translateProps {
  efficiency: Translation;
  standOut: Translation;
  quality: Translation
}

const HomePage = () => {

  const translation: translateProps = translate;
  const {currentLanguage} = useLanguage();

  const words = [translation.efficiency[currentLanguage], translation.standOut[currentLanguage], translation.quality[currentLanguage]];
  const { isLoaded } = useImageContext();
  return (
    <PageContainer>
      {!isLoaded && <LoadingScreen />}
      {isLoaded && (
        <>
          <Navbar />
          <ContentContainer>
            <TransitionText words={words} />
            <div className="d-flex w-100 first-container">
              <Description />
              <CodingStackInformation />
            </div>
            <Offer />
            <ProjectSteps />
            <ClientsLogos />
            <MailButton />
          </ContentContainer>
        </>
      )}
    </PageContainer>
  );
};

export default HomePage;
