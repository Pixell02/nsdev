import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface props {
    setIsLoaded: (value: boolean) => void
}

export interface projectInfoProps {
    descriptionEN: string | null;
    descriptionPL: string | null;
    images: [];
    title: string;
}
interface projectImageProps {
    attributes: {
        url: string
    }
}

const useAxiosProjectInfo = ({setIsLoaded}: props) => {

    const params = useParams();

    const [projectInfo, setProjectInfo] = useState<projectInfoProps | null >(null);
    useEffect(() => {
        setIsLoaded(false)
        axios.get(`https://nsdev.onrender.com/api/project-infos/${params.id}?populate=*`)
         .then((res) => {
            const data = res.data.data.attributes;
            setProjectInfo({
                descriptionEN: data.DescriptionEN,
                descriptionPL: data.descriptionPL,
                images: data.images.data.map((item: projectImageProps) => ({
                    src: item.attributes.url
                })),
                title: data.title
            });
            setIsLoaded(true)
         })
         .catch((err) => console.log(err))
         
    },[setIsLoaded])

  return projectInfo
}

export default useAxiosProjectInfo
