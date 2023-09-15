import { useEffect, useState } from 'react';

const useScroll = () => {

    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
        setTimeout(() => {
          setIsVisible(true)
        },2000)
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
  return isVisible
}

export default useScroll
