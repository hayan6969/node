"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation,useMotionValue,useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
function Roadmap() {
  const [scrolling, setScrolling] = useState(false); // Tracks whether scrolling is happening

    const [height, setHeight] = useState(100); // Initial height of the purple div
    const lastScrollY = useRef(0); // Tracks the last scroll position
    const controls = useAnimation();
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        // Calculate scroll difference
        const scrollDelta = currentScrollY - lastScrollY.current;
  
        if (scrollDelta > 0) {
          // Scrolling down: Increase height
          setHeight((prevHeight) => Math.min(prevHeight + Math.abs(scrollDelta), window.innerHeight));
        } else if (scrollDelta < 0) {
          // Scrolling up: Decrease height
          setHeight((prevHeight) => Math.max(prevHeight - Math.abs(scrollDelta), 50));
        }
  
        lastScrollY.current = currentScrollY; // Update the last scroll position
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Animate height changes when scrolling
      controls.start({ height });
    }, [height, controls]);

  useEffect(() => {
    // Animate height changes when scrolling
    controls.start({ height });
  }, [height, controls]);
  return (
    <>
    <div className="p-10 md:p-20 bg-[#080808] mt-56 flex flex-col items-center relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-[#CFB145] before:rounded-full before:bg-opacity-15 before:top-96 before:translate-y-44 before:left-0 before:-translate-x-1/3 after:-right-0 after:translate-x-1/3 after:-top-10 after:w-96 after:h-96 after:blur-3xl after:absolute after:bg-[#cf9f45] after:rounded-full z-10 after:bg-opacity-15 after:mt-4">
      <h1 className='text-7xl font-semibold relative before:absolute before:content-["ROAD"] before:-top-20 before:left-12 before:unbordered-white before:text-9xl before:w-full before:h-full before:opacity-50 after:absolute after:content-["MAP"] after:-bottom-8 after:left-1/2 after:unbordered-white after:text-9xl after:w-full after:h-full after:opacity-50 '>
        From Vision to Reality
      </h1>

      <div className="flex py-44">
        <div className="w-full"></div>
      <div
      style={{
        height: "100vh", // Full-page scrollable height
        background: "white", // Background color for the entire page
      }}
    >
      <div className="w-2 bg-slate-500 overflow-hidden bg-opacity-40"><motion.div className="w-full bg-[#CFB145]" animate={controls} initial={{ height: 100 }} transition={{ type: "tween" }} /></div>
        <div className="w-full"></div>
    </div>
      </div>
    </div>



    <div className="w-screen flex justify-center">

    </div>
<div className="w-full flex flex-col gap-6 pt-24">
  <div className="flex flex-col gap-4">
    <h1 className="heading">A Roadmap That Evolves with Us</h1>
    <p className="para">Our roadmap is a living, adaptable framework designed to grow with us. It evolves alongside new opportunities, unexpected challenges, and the invaluable contributions of our community.              At every step, we remain committed to transparency, keeping you informed and engaged throughout our journey</p>
  </div>
  <p className="para">Our ultimate goal is simple: to empower you, our community, to actively shape our development and share in our success</p>
</div>
    </>
  );
}

export default Roadmap;


