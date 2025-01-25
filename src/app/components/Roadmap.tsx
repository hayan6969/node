"use client";
import React, { useRef } from "react";
import { motion, useAnimation,useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
function Roadmap() {
  
  // const controls1 = useAnimation(); // Control animations
  // const controls2 = useAnimation(); // Control animations
  // const controls3 = useAnimation(); // Control animations
  // const controls4 = useAnimation(); // Control animations
  // const controls5 = useAnimation(); // Control animations
  // const [ref1, inView1] = useInView({
  //   triggerOnce: false, // Trigger every time it comes into view
  //   threshold: 0.1, // Trigger when 10% is visible
  // });
  // const [ref2, inView2] = useInView({
  //   triggerOnce: false, // Trigger every time it comes into view
  //   threshold: 0.1, // Trigger when 10% is visible
  // });
  // const [ref3, inView3] = useInView({
  //   triggerOnce: false, // Trigger every time it comes into view
  //   threshold: 0.1, // Trigger when 10% is visible
  // });
  // const [ref4, inView4] = useInView({
  //   triggerOnce: false, // Trigger every time it comes into view
  //   threshold: 0.1, // Trigger when 10% is visible
  // });
  // const [ref5, inView5] = useInView({
  //   triggerOnce: false, // Trigger every time it comes into view
  //   threshold: 0.1, // Trigger when 10% is visible
  // });
  // React.useEffect(() => {
  //   if (inView1) {
  //     controls1.start({ stroke: "#CFB145" }); // Change to orange when in view
  //   } else {
  //     controls1.start({ stroke: "#FFFFFF" }); // Revert to white
  //   }
  // }, [inView1, controls1]);
  // React.useEffect(() => {
  //   if (inView2) {
  //     controls2.start({ stroke: "#CFB145" }); // Change to orange when in view
  //   } else {
  //     controls2.start({ stroke: "#FFFFFF" }); // Revert to white
  //   }
  // }, [inView2, controls2]);
  // React.useEffect(() => {
  //   if (inView3) {
  //     controls3.start({ stroke: "#CFB145" }); // Change to orange when in view
  //   } else {
  //     controls3.start({ stroke: "#FFFFFF" }); // Revert to white
  //   }
  // }, [inView3, controls3]);
  // React.useEffect(() => {
  //   if (inView4) {
  //     controls4.start({ stroke: "#CFB145" }); // Change to orange when in view
  //   } else {
  //     controls4.start({ stroke: "#FFFFFF" }); // Revert to white
  //   }
  // }, [inView4, controls4]);
  // React.useEffect(() => {
  //   if (inView5) {
  //     controls5.start({ stroke: "#CFB145" }); // Change to orange when in view
  //   } else {
  //     controls5.start({ stroke: "#FFFFFF" }); // Revert to white
  //   }
  // }, [inView5, controls5]);
  return (
    <>
    <div className="p-10 md:p-20 bg-[#080808] mt-56 flex flex-col items-center relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-[#CFB145] before:rounded-full before:bg-opacity-15 before:top-96 before:translate-y-44 before:left-0 before:-translate-x-1/3 after:-right-0 after:translate-x-1/3 after:-top-10 after:w-96 after:h-96 after:blur-3xl after:absolute after:bg-[#cf9f45] after:rounded-full z-10 after:bg-opacity-15 after:mt-4">
      <h1 className='text-7xl font-semibold relative before:absolute before:content-["ROAD"] before:-top-20 before:left-12 before:unbordered-white before:text-9xl before:w-full before:h-full before:opacity-50 after:absolute after:content-["MAP"] after:-bottom-8 after:left-1/2 after:unbordered-white after:text-9xl after:w-full after:h-full after:opacity-50 '>
        From Vision to Reality
      </h1>
      {/* <div className="flex flex-col items-center my-44 w-full gap-1.5">
        <div className={`w-[50vw] h-60 relative p-24 flex justify-center items-center`}>
          <div ref={ref1} className="absolute scale-75 -left-20">
          <svg width="716" height="372" viewBox="0 0 716 372" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M206.95 1C-57.0497 1 -78.0498 371 206.95 371 M206 1H716"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF" // Default stroke color
                initial={{ stroke: "#FFFFFF" }} // White as initial color
                animate={controls1} // Controlled by animation
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="heading">Founfational Excellence</h1>
            <p>
              Establishing the legal, organizational, and technical framework to
              ensure a stable and scalable platform foundation. This includes
              creating a strong brand identity and crafting a strategic roadmap
              that aligns innovation with long-term sustainability
            </p>
          </div>
        </div>
        
        <div className={`w-[50vw] h-60 relative p-24 flex justify-center items-center`}>
          <div ref={ref2} className="absolute scale-[0.865] -right-[33px]">
          <svg width="700" height="372" viewBox="0 0 813 372" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M606.05 1C870.05 1 891.05 371 606.05 371 M607 1H0"  strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF" // Default stroke color
                initial={{ stroke: "#FFFFFF" }} // White as initial color
                animate={controls2} 
                transition={{delay:0.1}}
                />
          </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="heading">Founfational Excellence</h1>
            <p>
              Establishing the legal, organizational, and technical framework to
              ensure a stable and scalable platform foundation. This includes
              creating a strong brand identity and crafting a strategic roadmap
              that aligns innovation with long-term sustainability
            </p>
          </div>
        </div>

        <div className={`w-[50vw] h-60 relative p-24 flex justify-center items-center`}>
          <div ref={ref3} className="absolute scale-75 -left-8">
          <svg width="716" height="372" viewBox="0 0 716 372" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M206.95 1C-57.0497 1 -78.0498 371 206.95 371 M206 1H716"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF" // Default stroke color
                initial={{ stroke: "#FFFFFF" }} // White as initial color
                animate={controls3} // Controlled by animation
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="heading">Founfational Excellence</h1>
            <p>
              Establishing the legal, organizational, and technical framework to
              ensure a stable and scalable platform foundation. This includes
              creating a strong brand identity and crafting a strategic roadmap
              that aligns innovation with long-term sustainability
            </p>
          </div>
        </div>

        <div className={`w-[50vw] h-60 relative p-24 flex justify-center items-center`}>
          <div ref={ref4} className="absolute scale-[0.865] -right-[85px]">
          <svg width="700" height="372" viewBox="0 0 813 372" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M606.05 1C870.05 1 891.05 371 606.05 371 M607 1H0"  strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF" // Default stroke color
                initial={{ stroke: "#FFFFFF" }} // White as initial color
                animate={controls4} 
                transition={{delay:0.1}}
                />
          </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="heading">Founfational Excellence</h1>
            <p>
              Establishing the legal, organizational, and technical framework to
              ensure a stable and scalable platform foundation. This includes
              creating a strong brand identity and crafting a strategic roadmap
              that aligns innovation with long-term sustainability
            </p>
          </div>
        </div>

        <div className={`w-[50vw] h-60 relative py-36 px-14 flex justify-center items-center translate-x-10`}>
          <div ref={ref5} className="absolute scale-90 -left-14 -top-[23px]">
          <svg width="716" height="372" viewBox="0 0 716 372" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M206.95 1C-57.0497 1 -78.0498 371 206.95 371 M206 1H716"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF" // Default stroke color
                initial={{ stroke: "#FFFFFF" }} // White as initial color
                animate={controls5} // Controlled by animation
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="heading">Founfational Excellence</h1>
            <p className="mr-12">
              Establishing the legal, organizational, and technical framework to
              ensure a stable and scalable platform foundation. This includes
              creating a strong brand identity and crafting a strategic roadmap
              that aligns innovation with long-term sustainability
            </p>
          </div>
        </div>

      </div> */}
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


