import axios from 'axios';
import { useEffect, useState } from 'react';

interface ImgDataProps {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
export interface imageProps {
  src: string;
}

interface Props {
  setIsLoaded: (value: boolean) => void;
}

const useClientLogos = ({ setIsLoaded }: Props) => {
  const [images, setImages] = useState<imageProps[]>(); 
  useEffect(() => {
    setIsLoaded(false);

    axios
      .get("https://nsdev.onrender.com/api/companies?populate=*")
      .then((res) => {
        const imageData = res.data.data.map((data: ImgDataProps) => ({
          src: data.attributes.image.data.attributes.url,
        }));
        setImages(imageData);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [setIsLoaded]); // Include setIsLoaded in the dependency array

  return images;
};

export default useClientLogos;
