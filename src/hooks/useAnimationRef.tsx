import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useAnimationRef = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Najpierw powiększ do 1.2, a następnie do 1
      mainControls.start("scaled").then(() => {
        return mainControls.start("visible");
      });
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return { ref, mainControls };
};

export default useAnimationRef;
