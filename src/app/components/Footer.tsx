import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
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
      
      <footer className="p-14 md:p-20 bg-black text-white w-full border-t-2 border-[#cf9f45] flex justify-between">
        <div className="flex flex-col gap-2">
          <div>LOGO.</div>
          <div className="flex gap-4 text-xl items-center">
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="font-semibold">Use cases</h6>
          <div className="flex flex-col gap-2">
            {CASES.map((link) => (
              <p>{link}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="font-semibold">Explore</h6>
          <div className="flex flex-col gap-2">
            {Explore.map((link) => (
              <p>{link}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
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
