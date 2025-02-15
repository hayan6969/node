"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation,useMotionValue,useScroll,useInView } from "framer-motion";

function RoadmapAnimation({initialHeight=0}) {
    const [height, setHeight] = useState(0);
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 }); // Triggers when 50% visible

  // Only update animation when this specific ScrollBar is in view
  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      setHeight((prevHeight) => {
        if (scrollDelta > 0) {
          return Math.min(prevHeight + Math.abs(scrollDelta), window.innerHeight/2);
        } else if (scrollDelta < 0) {
          return Math.max(prevHeight - Math.abs(scrollDelta), 0);
        }
        return prevHeight;
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      controls.start({ height });
    }
  }, [height, controls, isInView]);
  return (
    <div ref={ref} className="h-64 max-sm:h-80 bg-white bg-opacity-50 overflow-hidden w-3 ">
      <div className="w-full bg-slate-500 overflow-hidden bg-opacity-40">
        <motion.div
          className="w-full h-0 bg-[#CD7F32]"
          animate={controls}
          initial={{ height: 0 }}
          transition={{ type: "tween", }}
        />
      </div>
    </div>
  )
}

export default RoadmapAnimation
