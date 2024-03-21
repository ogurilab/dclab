"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none z-30 flex size-96 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div className="inset-0 -mt-7 size-full flex-none">
        <div className="absolute inset-x-0 top-0  flex justify-center">
          <span className="relative z-10 flex items-center space-x-2 rounded-full bg-background px-4 py-0.5 ring-1 ring-border">
            <span className="relative z-20 inline-block py-0.5 text-xs font-bold">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
          </span>
        </div>

        <div
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0,
            }}
            className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0,
            }}
            className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2,
            }}
          />
          <motion.div
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0,
            }}
            className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4,
            }}
          />
        </div>

        <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-sky-500 blur-[2px] group-hover/pin:h-40" />
        <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-sky-500 group-hover/pin:h-40  " />
        <motion.div className="absolute bottom-1/2 right-1/2 z-40 size-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-sky-600 blur-[3px]" />
        <motion.div className="absolute bottom-1/2 right-1/2 z-40 size-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-sky-300 " />
      </div>
    </motion.div>
  );
};

export const PinContainer = ({
  children,
  title,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-40  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden rounded-2xl  border border-white/[0.1] bg-background p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]"
          style={{
            transform,
          }}
        >
          <div className={cn("relative z-40 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} />
    </div>
  );
};
