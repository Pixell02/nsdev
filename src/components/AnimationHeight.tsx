import { motion } from "framer-motion";
import React from "react";
import useAnimationRef from "../hooks/useAnimationRef";
interface props {
  children: React.ReactNode;
  delay?: number;
}

const AnimationHeight = (props: props) => {

  const { ref, mainControls } = useAnimationRef();

  return (
    <div ref={ref}>
    <motion.div
    variants={{
        hidden: { height: 0},
        visible: { height: 70}
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

export default AnimationHeight
