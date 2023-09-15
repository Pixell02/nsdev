import { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';

const useProjectsContext = () => {

    const context = useContext(ProjectsContext);
    if(!context) {
        throw Error("!imageContext")
    }

  return context
}

export default useProjectsContext
