import axios from 'axios';
import { useEffect, useState } from 'react';

interface screenshotDataProps {
  data: {
    attributes: {
      url: string;
    };
  }[];
}
interface dataProps {
  id: number;
  attributes: {
    name: string;
    screenshoots: screenshotDataProps;
  };
}

const useProjectData = ({setIsLoaded}: {setIsLoaded: (value: boolean) => void}) => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get("https://nsdev.onrender.com/api/projects?populate=*")
      .then((res) => {
        const projectData = res.data.data.map((data: dataProps) => ({
          id: data.id,
          name: data.attributes.name,
          image: data.attributes.screenshoots.data[0].attributes.url,
        }));
        setProjects(projectData);
        setIsLoaded(true)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);
  return projects
}

export default useProjectData
