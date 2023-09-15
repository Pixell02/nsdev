import { motion } from "framer-motion";
import useAnimationRef from "../hooks/useAnimationRef";

interface props {
  children: React.ReactNode;
  delay?: number;
}

const AnimationWidth = (props: props) => {
  const { ref, mainControls } = useAnimationRef();
  return (
    <div ref={ref} className="d-flex w-100 justify-content-center align-items-center">
    <motion.div
    variants={{
        hidden: { width: 0},
        visible: { width: "100%"}
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

export default AnimationWidth
