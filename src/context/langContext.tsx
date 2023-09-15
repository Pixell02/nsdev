import React, { createContext, useState } from 'react';

interface LanguageProviderProps {
  children: React.ReactNode;
}

interface LanguageContextType {
  changeLanguage: (language: string) => void;
  currentLanguage: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);



const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const DEFAULT_LANGUAGE = 'pl';
  const [currentLanguage, setCurrentLanguage] = useState<string>(DEFAULT_LANGUAGE);

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const contextValue: LanguageContextType = {
    changeLanguage,
    currentLanguage
  };


  return (
    <LanguageContext.Provider value={contextValue}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
