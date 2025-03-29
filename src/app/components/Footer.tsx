import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
export default function Footer() {
  const CASES = [
    "UI design",
    "UX design",
    "Wireframing",
    "Diagramming",
    "Brainstorming",
    "Online whiteborder",
    "Team collaboration",
  ];
  const Explore = [
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration feature",
    "Design process",
    "Figma",
  ];
  const Recources = [
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developer",
    "Recource liberary",
  ];
  return (
      
      <footer className="p-14 md:p-20 max-sm:px-4 bg-black text-white w-full border-t-2 border-[#cf9f45] flex max-md:flex-col max-md:gap-4 justify-between">
        <div className="flex max-md:w-full flex-col gap-2">
          <div>LOGO.</div>
           <div className='flex max-md:w-full gap-2'>
           <FaXTwitter className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-white hover:text-black duration-150 cursor-pointer" />
          <FaYoutube className="text-white border-2 border-white rounded-full p-1.5 text-lg w-auto h-auto bg-transparent hover:bg-red-700  duration-150 cursor-pointer" />
          <FaInstagram className="text-white border-2 border-white rounded-full p-1.5 text-lg w-auto h-auto bg-transparent hover:bg-gradient-to-b from-[#4c68d7] via-pink-500 to-[#fccc63]  duration-150 cursor-pointer" />
           <FaTelegramPlane className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-sky-500 hover:text-white duration-150 cursor-pointer" />
  <RiDiscordLine  className="text-white border-2 border-white rounded-full p-1 px-[5px] text-xl w-auto h-auto bg-transparent hover:bg-indigo-500 duration-150 cursor-pointer" />
           <FaMediumM className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-white hover:text-black duration-150 cursor-pointer" />
                    </div>
        </div>
        <div className="flex flex-col max-md:w-full gap-6">
          <h6 className="font-semibold">Use cases</h6>
          <div className="flex flex-col gap-2">
            {CASES.map((link) => (
              <p>{link}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col max-md:w-full gap-6">
          <h6 className="font-semibold">Explore</h6>
          <div className="flex flex-col gap-2">
            {Explore.map((link) => (
              <p>{link}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 max-md:w-full">
          <h6 className="font-semibold">Resources</h6>
          <div className="flex flex-col gap-2">
            {Recources.map((link) => (
              <p>{link}</p>
            ))}
          </div>
        </div>
      </footer>
  );
}
