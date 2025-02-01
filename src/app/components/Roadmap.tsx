"use client";
import React, { useEffect, useRef, useState } from "react";
// import { motion,useInView,useMotionValueEvent, useScroll,useTransform } from 'framer-motion';
import { motion, useAnimation,useMotionValue,useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
function Roadmap() {
  // const {scrollYProgress}= useScroll()
  // const fillHeight=useTransform(scrollYProgress,[0,1],['0%','100%'])
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
      <h1 className='text-7xl font-semibold relative z-20'>
        <Image  src='./ROADText.svg' height='120' width="400" alt="" className="z-0 absolute left-1/4 -translate-x-1/3 bottom-1/2" />
        <Image  src='./MAPText.svg' height='120' width="400" alt="" className="z-0 absolute right-1/4 translate-x-1/3 top-1/2" />


        From Vision to Reality
      </h1>


{/* <div className="w-screen flex justify-center p-44 relative" >

<div className='relative h-screen w-screen bg-slate-300 flex justify-center'>
        <div className='h-full w-10 bg-black'></div>
    <motion.div className='w-10 h-full bg-blue-500 absolute top-0 ' style={{translateY:fillHeight}} animate={{transition:'1s'}}>
      
    </motion.div>
    </div>
{/* <div className="w-3 h-screen bg-white"></div>
  <motion.div className={`w-3 h-screen absolute bg-[#CFB145] top-0 `}  style={{translateY:fillheight}} ></motion.div> */}

{/* </div> */}
 
    {/* </div> */} 


    <div className="flex py-44">
        <div className="w-full"></div>
      <div className="h-screen bg-white bg-opacity-50">
      <div className="w-2 bg-slate-500 overflow-hidden bg-opacity-40"><motion.div className="w-full bg-[#CD7F32]" animate={controls} initial={{ height: 100 }} transition={{ type: "tween" }} /></div>
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


