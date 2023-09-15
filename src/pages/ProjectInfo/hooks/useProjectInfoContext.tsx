import { useContext } from 'react';
import { ProjectInfoContext } from '../context/ProjectInfoContext';

const useProjectInfoContext = () => {
    const context = useContext(ProjectInfoContext);
    if (!context) {
        throw Error("projectInfoContext")
    }
  return context 
}

export default useProjectInfoContext
