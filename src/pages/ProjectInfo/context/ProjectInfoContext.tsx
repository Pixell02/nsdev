import React, { createContext, useState } from "react";
import useAxiosProjectInfo from "../hooks/useAxiosProjectInfo";

export const ProjectInfoContext = createContext<contextProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export interface ProjectInfoProps {
  descriptionEN: string | null;
  descriptionPL: string | null;
  images: {src: string}[];
  title: string;
}

interface contextProps {
  isLoaded: boolean;
  projectInfo: ProjectInfoProps | null; // Popraw typ na ProjectInfoProps
}

export const ProjectInfoContextProvider = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const projectInfo = useAxiosProjectInfo({ setIsLoaded });

  const contextValue: contextProps = {
    isLoaded,
    projectInfo,
  };

  return (
    <ProjectInfoContext.Provider value={contextValue}>
      {children}
    </ProjectInfoContext.Provider>
  );
};
