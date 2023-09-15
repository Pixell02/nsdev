
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import useLanguage from "../hooks/useLanguage";
import useScroll from "../hooks/useScroll";
import useWidth from "../pages/Home/components/hooks/useWidth";
import HamBar from "./HamBar";
import ItemLink from "./ItemLink";
import translateData from "./navBarTranslation.json";
import "./navbar.css";
import SideBar from "./navbar/SideBar";

export interface Translation {
  pl: string;
  en: string;
  [key: string]: string;
}

interface Props {
  main: Translation;
  realizations: Translation;
  contact: Translation;
}

export default function Navbar() {
  const { changeLanguage, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const width = useWidth();
  const translate: Props = translateData;
  const isVisible = useScroll();
  const navbarClass = isVisible ? "visible" : "hidden";
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={(width <= 600 && !isClicked) ? navbarClass : "visible"}>
      <div className="logo-container">
        <img src={logo} onClick={() => navigate("/")} style={{cursor: "pointer"}} height="50px" alt="error" />
        <div className="d-flex align-items-end h-100 name-container"></div>
      </div>
      {width >= 600 && (
        <div className="d-flex flex-row h-100 w-100 align-items-center justify-content-end links-container">
        <ItemLink link="/" name={translate.main[currentLanguage]} />
        <ItemLink link="/portfolio" name={translate.realizations[currentLanguage]} />
      </div>
      )}
      {width < 600 && (
        <div className="d-flex align-items-center justify-content-end w-100">
          {!isClicked && (
          <HamBar onClick={() => setIsClicked(true)} />
          )}
          {isClicked && (
            <div style={{width: "32px", height: "32px"}}></div>
          )}
        </div>
      )}
      <div className="language-container">
        <div className="d-flex">
          
          <span
            style={{ color: currentLanguage === "pl" ? "#00fdf9" : "white" }}
            className="cursor-pointer"
            onClick={() => changeLanguage("pl")}
          >
            PL
          </span>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}> | </span>
          <span
            style={{ color: currentLanguage === "en" ? "#00fdf9" : "white" }}
            className="cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            EN
          </span>
        </div>
      </div>
      <SideBar isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
}
