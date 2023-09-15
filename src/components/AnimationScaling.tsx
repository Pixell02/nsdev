import { motion } from "framer-motion";
import useAnimationRef from "../hooks/useAnimationRef";

interface props {
  children: React.ReactNode;
  delay?: number;
}

const AnimationScaling = (props: props) => {
    const { ref, mainControls } = useAnimationRef();
  return (
    <div ref={ref}>
     <motion.div
      variants={{
        hidden: {scale: 0},
        scaled: {scale: 1.1},
        visible: {scale: 1}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.25, delay: props.delay || 0.05, ease: "easeOut"}}
    >
      {props.children}
    </motion.div>
    </div>
  )
}

export default AnimationScaling
