import { motion } from "framer-motion";
import useAnimationRef from "../hooks/useAnimationRef";

interface props {
  children: React.ReactNode;
  delay?: number;
}

const AnimationTop = (props: props) => {
  const { ref, mainControls } = useAnimationRef();
  return (
    <div ref={ref}>
     <motion.div
    variants={{
        hidden: {opacity: 0, y: -100},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.75, delay: props.delay || 0.25}}
    >
      {props.children}
    </motion.div>
    </div>
  )
}

export default AnimationTop
