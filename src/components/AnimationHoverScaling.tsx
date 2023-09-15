import { motion } from "framer-motion";
import useAnimationRef from "../hooks/useAnimationRef";

interface props {
  children: React.ReactNode;
  delay?: number;
}

const AnimationHoverScaling = (props: props) => {
    const { ref } = useAnimationRef();
  return (
    <div ref={ref}>
     <motion.div
      variants={{
        scale: {scale: 1.2},
        init: {scale: 1}
      }}
      initial="init"
      whileHover="scale"
      transition={{duration: 0.25, ease: "easeOut"}}
    >
      {props.children}
    </motion.div>
    </div>
  )
}

export default AnimationHoverScaling
