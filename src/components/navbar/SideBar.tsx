import useLanguage from "../../hooks/useLanguage";
import ItemLink from "../ItemLink";
import translateData from "../navBarTranslation.json";
import "./sidebar.css";

interface Translation {
  pl: string;
  en: string;
  [key: string]: string;
}

interface Props {
  main: Translation;
  realizations: Translation;
  contact: Translation;
}
interface sideBarProps {
    isClicked: boolean;
    setIsClicked: (value: boolean) => void;
}
const SideBar = ({isClicked, setIsClicked}: sideBarProps) => {
    const { currentLanguage } = useLanguage();
    
const translate: Props = translateData;
  return (
    <div className={isClicked ? "sidebar-container active" : "sidebar-container"}>
      <div className="close-btn-container">
        <div onClick={() => setIsClicked(false)} className="close-btn">&#215;</div>
      </div>
      <div className="d-flex flex-column links-container">
        <ItemLink link="/" name={translate.main[currentLanguage]} />
        <ItemLink link="/portfolio" name={translate.realizations[currentLanguage]} />
      </div>
    </div>
  )
}

export default SideBar
