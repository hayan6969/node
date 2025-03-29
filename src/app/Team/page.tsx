import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import GradientText from "@/components/GradientText/GradientText";
import Link from "next/link";
function page() {
  return (
    <>
      <Header />
      <div className="bg-[#080808] min-h-screen text-white pb-0 overflow-hidden">
        {/* heropage */}
        <div className="flex items-center justify-center h-screen pt-10 border-b border-white flex-col text-[10vw] max-md:text-[20vw] leading-none text-[#CD7F32] font-bold relative overflow-hidden">
        <svg width="300" height="300" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute top-1/3 left-2/3 -translate-x-20 max-sm:scale-50 max-lg:-translate-x-8">
<path d="M171 0L210.744 22.6744L256.5 22.9097L279.582 62.4181L319.09 85.5L319.326 131.256L342 171L319.326 210.744L319.09 256.5L279.582 279.582L256.5 319.09L210.744 319.326L171 342L131.256 319.326L85.5 319.09L62.4181 279.582L22.9097 256.5L22.6744 210.744L0 171L22.6744 131.256L22.9097 85.5L62.4181 62.4181L85.5 22.9097L131.256 22.6744L171 0Z" fill="#D9D9D9"/>
</svg>
        <svg width="200" height="200" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute top-1/4 left-1/4 -translate-x-20 max-lg:-translate-x-28 max-sm:scale-75" >
<path d="M171 0L210.744 22.6744L256.5 22.9097L279.582 62.4181L319.09 85.5L319.326 131.256L342 171L319.326 210.744L319.09 256.5L279.582 279.582L256.5 319.09L210.744 319.326L171 342L131.256 319.326L85.5 319.09L62.4181 279.582L22.9097 256.5L22.6744 210.744L0 171L22.6744 131.256L22.9097 85.5L62.4181 62.4181L85.5 22.9097L131.256 22.6744L171 0Z" fill="#D9D9D9"/>
</svg>
        <svg width="100" height="100" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-2/3 left-1/3 -translate-x-10 max-md:left-1/2 max-md:top-3/4">
<path d="M171 0L210.744 22.6744L256.5 22.9097L279.582 62.4181L319.09 85.5L319.326 131.256L342 171L319.326 210.744L319.09 256.5L279.582 279.582L256.5 319.09L210.744 319.326L171 342L131.256 319.326L85.5 319.09L62.4181 279.582L22.9097 256.5L22.6744 210.744L0 171L22.6744 131.256L22.9097 85.5L62.4181 62.4181L85.5 22.9097L131.256 22.6744L171 0Z" fill="#D9D9D9"/>
</svg>
        <span className="absolute before:absolute before:w-52 before:h-28 before:bg-white left-32 top-1/2 max-lg:bottom-0 max-lg:left-5 translate-y-12 before:rounded-lg before:top-full text-center para text-white flex justify-center items-center">Powerd by Coffee <br />Creativity, and <br />Collabration</span>
          <h1 className="font-semibold z-10">ABOUT</h1>
          <h1 className="font-semibold z-10">OUR</h1>
          <h1 className="font-semibold z-10">TEAM</h1>
        </div>
        {/* second Page */}
        <div className="p-10 md:p-20 flex flex-col gap-10 md:gap-20 max-sm:px-4 para border-b border-white ">
          <div className="flex flex-col gap-8">
            <GradientText
              colors={["#ffffff", "#ffffff", "#ffffff", "#3570bf", "#004aad", "#3570bf", "#ffffff", "#ffffff", "#ffffff"]}
              animationSpeed={7}
              showBorder={false}
              className="heading"
            >
            <h1 className="heading">The Team – The Energy Behind ASS I AM</h1>
            </GradientText>
            <p>
              We’re a team with big ambitions and an even bigger vision. At ASS
              I AM, this isn’t just work—it’s our passion, our purpose, and what
              fuels us every single day. Together, as a tight-knit crew of
              dreamers, tech enthusiasts, and creators, we thrive on energy,
              creativity, and a fearless drive to innovate
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="heading">What keeps us going?</h1>
            <p>
              It’s the magic of combining ideas, technical know-how, and an
              unwavering desire to push boundaries. Whether brainstorming new
              concepts or building cutting-edge features, every step brings us
              closer to one shared goal:
            </p>
            <p className="w-full text-center">
              Creating an immersive ecosystem that’s set to redefine the future
              of adult entertainment
            </p>
          </div>
          <div className="flex flex-col gap-8 my-12">
            <h1 className="heading">The Founders – Leading the Revolution</h1>
            <p>
              At the heart of ASS I AM are two passionate founders who are
              reimagining what’s possible. With their vision, expertise, and
              commitment, they’re laying the foundation for a platform that’s
              fair, innovative, and community-driven.
            </p>
          </div>
          <div className="w-full py-12 flex max-md:flex-col justify-center gap-44 max-md:gap-12 items-center">
            <div className=" flex flex-col gap-8">
              <div className="w-60 h-60 bg-white rounded-full"></div>
              <div className="w-60 bg-blue-700 py-3 text-center rounded-xl heading">
                David
              </div>
              <p className="para  text-center">
                Vision Architect <br />&<br />
                Founder{" "}
              </p>
            </div>
            <div className=" flex flex-col gap-8">
              <div className="w-60 h-60 bg-white rounded-full"></div>
              <div className="w-60 bg-blue-700 py-3 text-center rounded-xl heading">
                Anelina
              </div>
              <p className="para  text-center">
                Creating Architect <br />&<br />
                Co - Founder{" "}
              </p>
            </div>
          </div>
        </div>
        {/* third section */}
        {/* i am leaving third section fornnow  */}

        {/* fourth section */}
        <div className="p-10 md:p-20 max-sm:px-4 pb-0 md:pb-0">
        <GradientText
              colors={["#ffffff", "#ffffff", "#ffffff", "#3570bf", "#004aad", "#3570bf", "#ffffff", "#ffffff", "#ffffff"]}
              animationSpeed={7}
              showBorder={false}
              className="heading"
            >
          <h1 className="heading">We’re Growing – Be Part of It</h1>
            </GradientText>
          <p className="mt-10 para">
          What began as a small team is evolving into a thriving network of visionaries, technicians, creatives, and doers. Together, we’re shaping a team that knows exactly what it wants:
          </p>
          <div className="my-8 flex flex-col gap-6">
            <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Breaking boundaries and redefining the standdards of the industry.</p>
            <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Building the platform of the firture with unwavering determination and innovation.</p>
            <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Creating a space where passion, bold ideas, and talent come togather to thrive</p>
          </div>
          <h1 className="heading mt-10 md:mt-20">The Journey Has Just Begun</h1>
          <p className="mt-10 para">
          We’re searching for people who think like us—innovative, energetic, and ready to make a difference. If you’re bold, driven, and excited to be part of something revolutionary, stay tuned! 
          </p>
          <p className="mt-10 para">
          Our first job postings will be live soon, and we want you to join us in breaking limits and building the future of adult entertainment
          </p>
          <div className="flex items-center justify-center mt-20 md:mt-32">
            <h1 className="heading flex items-center justify-center text-center">
            ASS I AM – Together, We Build the Future. <br />No Shame. No Limits. All Together
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
          <GradientText
              colors={["#ffffff","#ffffff", "#ffffff", "#ffde59", "#cd7f32", "#ffde59", "#ffffff", "#ffffff", "#ffffff"]}
              animationSpeed={7}
              showBorder={false}
              className="heading"
            >
            <h1 className="mt-20 md:mt-32 heading">
              Join Us – Explore Current Opportunities
            </h1>
            </GradientText>
            <Link href='/jobs' className="mt-10 border-blue-500 border px-7 text-white py-1 rounded-lg mb-20">
              View jobs
            </Link>
          </div>
      <Footer />
        </div>
      </div>
    </>
  );
}

export default page;