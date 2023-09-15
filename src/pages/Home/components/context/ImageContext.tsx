import React, { createContext, useState } from "react";
import useClientLogos, { imageProps } from "../hooks/useClientLogos";

export const ImageContext = createContext<providerProps | null>(null);

interface props {
  children: React.ReactNode;
}



interface providerProps {
  images: imageProps[] | undefined; // Może być pojedynczym obiektem lub undefined
  isLoaded: boolean;
}

export const ImageContextProvider = ({ children }: props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const images = useClientLogos({ setIsLoaded });

  const contextValue: providerProps = {
    images,
    isLoaded,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};
