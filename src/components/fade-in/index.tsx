"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useContext,
} from "react";

const StaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -120px" };

export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
  const shouldReduceMotion = useReducedMotion();
  const isStagger = useContext(StaggerContext);

  return (
    <motion.div
      transition={{
        duration: 0.5,
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      {...(isStagger
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

interface FadeInWithStaggerProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  slow?: boolean;
  speed?: number;
  animationViewport?: typeof viewport;
}

export const FadeInWithStagger = forwardRef<
  HTMLDivElement,
  FadeInWithStaggerProps
>(({ slow = false, speed, animationViewport = viewport, ...props }, ref) => {
  return (
    <StaggerContext.Provider value>
      <motion.div
        ref={ref}
        initial="hidden"
        transition={{
          staggerChildren: speed ?? (slow ? 0.2 : 0.1),
        }}
        viewport={animationViewport}
        whileInView="visible"
        {...props}
      />
    </StaggerContext.Provider>
  );
});
