import React from "react";
import { FaCircle } from "react-icons/fa6";
import StayInLoop from "./StayInLoop";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";

function StayConnected() {
  return (
    <div className="w-full h-full bg-[#080808]  text-white pt-24 flex flex-col items-center">
      <h1 className="text-5xl font-semibold relative">
        <Image
          src="./Stay.svg"
          height="100"
          width="250"
          alt=""
          className="absolute bottom-2/3 -left-1/4 translate-x-1/4 max-sm:translate-x-1/4 max-sm:-top-2/3"
        />
        <Image
          src="./Connected.svg"
          height="150"
          width="600"
          alt=""
          className="absolute top-full right-1/4 translate-x-1/4 scale-125 max-sm:scale-110"
        />
        Stay Connected
      </h1>
      <div className="pt-52 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="heading">Don't Miss a Moment</h1>
          <p className="para">
            Be the first to know what’s next for ASS I AM. Sign up for our
            newsletter and get exclusive insights, updates, and opportunities
            delivered straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaCircle className="text-xs" />
            <p className="para">
              <b>Developer Diaries</b> - Follow our progress step by step.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle className="text-xs" />
            <p className="para">
              <b>Community Surveys</b> - Share yuor voice and help shape the
              future.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle className="text-xs" />
            <p className="para">
              <b>Event Announcement</b> - Stay in loop on exciting events and
              milestone.
            </p>
          </div>
        </div>
        <p className="para">
          We're just getting started, and you're a key part of this journey{" "}
          <br />
          <b>Subscribe now</b> and stay at the forefront of innovation.
        </p>
        <div className="w-full flex items-center justify-end">
          <div className="flex gap-2 items-center">
            <FaXTwitter className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-white hover:text-black duration-150 cursor-pointer" />
            <FaYoutube className="text-white border-2 border-white rounded-full p-1.5 text-lg w-auto h-auto bg-transparent hover:bg-red-700  duration-150 cursor-pointer" />
            <FaInstagram className="text-white border-2 border-white rounded-full p-1.5 text-lg w-auto h-auto bg-transparent hover:bg-gradient-to-b from-[#4c68d7] via-pink-500 to-[#fccc63]  duration-150 cursor-pointer" />
            <FaTelegramPlane className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-sky-500 hover:text-white duration-150 cursor-pointer" />
            <RiDiscordLine className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-indigo-500 duration-150 cursor-pointer" />
            <FaMediumM className="text-white border-2 border-white rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-white hover:text-black duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
      <StayInLoop />
    </div>
  );
}

export default StayConnected;
