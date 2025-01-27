import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaCircle } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Page() {
  return (
    <>
    <Header/>
    <div className='bg-[#080808] text-white min-h-screen p-10 md:p-20 pb-0 md:pb-0'>
        <div className='flex items-center justify-center relative'>
        <h1 className='mt-10 md:mt-20 text-[9vw] unbordered-white relative z-10 before:mt-2 before:absolute before:w-[85vw] before:rounded-xl boxShadow2 before:h-10 before:top-1/2 before:-translate-y-1/2 before:bg-[#CD7F32] flex justify-center items-center before:-z-10'>TOKENOMICS</h1>
        </div>
        <p className='para mt-10 md:mt-20'>
        At ASS I AM, we understand that a well-structured and  balanced tokenomic system is the cornerstone of success and sustainability. We are taking the necessary time to design a framework that not only meets today’s standards but sets new ones  
        </p>
        <p className="para mt-10 md:mt-20">
        Rushed decisions can lead to dissatisfaction among users and creators, casting a shadow on the potential of the crypto and Web3 world. That’s why we kindly ask for your patience and excitement for what’s ahead in the coming months
        </p>
        <h1 className='mt-10 md:mt-20 heading text-[#CD7F32]'>
        Why Patience is Key
        </h1>
        <p className='para mt-10 '>
        A well-thought-out roadmap, developed alongside industry experts, far outweighs rushed decisions. We’re committed to building a system that:
        </p>
        <div className='flex flex-col gap-3 py-8'>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Provides long-term stability and benefits for the entire community.</p>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Supports the platform’s economic structure with precision and foresight.</p>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /> Delivers a rewarding experience for every participant, from creators to users.</p>
        </div>
        <p className="para mt-10 md:mt-20">
        By taking this deliberate approach, we aim to create a tokenomics system that rewards everyone and offers an exceptional experience.
        </p>
        <h1 className='mt-10 md:mt-20 heading'>
        Our Current Efforts
        </h1>
        <p className='para mt-5 '>
        We’re fully immersed in the planning phase, collaborating with leading experts to build a tokenomic model that is robust, fair, and effective.
        </p>
        <p className='para mt-5 '>
        Here’s what we’re focusing on:
        </p>
        <div className='flex flex-col gap-3 py-8'>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>Token Distribution:</b> Ensuring fairness and transparency in every aspect.</p>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>Utility</b>Creating real-wold and in-platform use cases for meaningful intrections.</p>
          <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>Economic Impact:</b>Generating sustainable value accross the entire ASS I AM ecosystem.</p>
        </div>
        <p className='para mt-5 '>
        Our goal is ambitious yet clear: to deliver a tokenomics system that is fair, transparent, and beneficial for everyone involved
        </p>
<div className='relative mt-20 md:mt-32'>
      <div className='flex items-center justify-center flex-col '>
        <div className='flex  justify-start w-[58%]'>
        <h1 className='text-[8vw] font-bold unbordered-white leading-none opacity-65 '>
    STAY
</h1>
        </div>

<h1 className='text-[8vw] font-bold unbordered-white leading-none opacity-65'>
    WITH US
</h1>
</div>
<div className='absolute flex top-0 left-0 h-full w-full justify-center items-center'>
<h1 className='text-[4vw] font-bold text-white'>
    BUILDING VALUE
</h1>
</div>
</div>
<p className='mt-10 md:mt-20'>
We’ll share more details with you very soon. Your support and patience during this critical phase mean the world to us. We’re fully committed to keeping you informed and engaged as we move forward.
</p>
<p className='mt-10 md:mt-20'>
In the meantime, know that we’re working tirelessly behind the scenes to craft a system that’s built to last—a system that delivers exceptional value to users, creators, and supporters alike
</p>
<p className='mt-10 md:mt-20'>
Thank you for being an integral part of the ASS I AM journey as we move toward a revolutionary and decentralized future
</p>
<h1 className='mt-10 md:mt-20 heading '>
      Stay in the Loop !
        </h1>
        <p className='mt-10 para'>
        Follow us on social media to ensure you never miss an important update or announcement. Let’s shape the future together!
        </p>
<div className="flex gap-4 text-xl items-center w-full justify-center my-24">
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
    <Footer/>
    </div>
    </>
  )
}

export default Page