import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function StayInLoop() {
  return (
    <div className="w-full bg-gradient-to-r from-[#2B160A] to-[#1A2145] rounded-2xl px-8 py-6 flex flex-col gap-6 my-12">
        <span className="w-24 text-center py-1 border border-white rounded-full">
          Insider
        </span>
        <h5 className="heading">Stay in Loop</h5>
        <div className="flex gap-8">
          <div className="flex border border-slate-500 rounded-full w-2/3">
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
          <div className="flex gap-4 text-xl items-center">
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="border border-slate-500 w-4 h-4"
            />
            <p>I agree to the Terms and Conditions</p>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="border border-slate-500 w-4 h-4"
            />
            <p>
              I agree to receive promotional materials from DezoniX. I
              understand i can withdraw my consent at any time.
            </p>
          </div>
        </div>
      </div>
  )
}

export default StayInLoop
