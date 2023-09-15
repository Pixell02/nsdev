import { useContext } from "react";
import { LanguageContext } from "../context/langContext";



const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Language context not found");
  }

  const { changeLanguage, currentLanguage } = context;

  return { changeLanguage, currentLanguage };
};

export default useLanguage;
