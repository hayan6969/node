import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
function StayInLoop() {
  return (
    <div className="w-full bg-gradient-to-r from-[rgba(255,222,89,0.65)] via-[rgba(205,127,50,0.65)] to-[rgba(0,74,173,0.65)] rounded-2xl px-8 max-md:px-4 py-6 flex flex-col gap-6 my-12">
      <span className="w-24 text-center py-1 border border-white rounded-full">
        Insider
      </span>
      <h5 className="heading flex items-center">
        Stay in L
        <span>
          <Image
            src="./oo.svg"
            width={40}
            height={10}
            alt=""
            className="translate-y-1"
          />
        </span>
        <span className="-translate-x-1">p</span>
      </h5>
      <div className="flex gap-8 max-md:gap-4 max-md:flex-col justify-between">
        <div className="flex border border-white rounded-full w-2/3 max-md:w-full">
          <input
            type="email"
            className="w-full p-3 text-sm bg-transparent border-none outline-none"
            placeholder="Email address"
            name="email"
          />
          <label
            htmlFor="email"
            className="bg-black text-white border border-[#049ABC] rounded-full w-44 flex justify-center items-center"
          >
            Sign Up
          </label>
        </div>
        <div className="flex max-md:w-full max-md:justify-center gap-2 text-xl items-center">
          <RiDiscordLine  className="text-black border-2 border-black rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-indigo-500 duration-150 cursor-pointer" />
          <FaTelegramPlane className="text-black border-2 border-black rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-sky-500 hover:text-white duration-150 cursor-pointer" />
          <FaXTwitter className="text-black border-2 border-black rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-black hover:text-white duration-150 cursor-pointer" />
          <FaMediumM className="text-black border-2 border-black rounded-full p-1 text-xl w-auto h-auto bg-transparent hover:bg-white duration-150 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="border border-white w-4 h-4" />
          <p>I agree to the Terms and Conditions</p>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="border border-slate-500 w-4 h-4" />
          <p>
            I agree to receive promotional materials from DezoniX. I understand
            i can withdraw my consent at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StayInLoop;
