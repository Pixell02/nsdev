import { createContext, useState } from "react";
import useProjectData from "../hooks/useProjectData";


export const ProjectsContext = createContext<providerProps | null>(null);

interface providerProps {
  projects: imageProps[] 
  isLoaded: boolean;
}

interface imageProps {
  id: number;
  name: string;
  image: string
}

interface props {
  children: React.ReactNode;
}


export const ProjectsContextProvider = ({children}: props) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const projects = useProjectData({setIsLoaded})

    const contextValue: providerProps = {
    projects,
    isLoaded,
  };

    return (
        <ProjectsContext.Provider value={contextValue}>
            {children}
        </ProjectsContext.Provider>
    )
}