import React from "react";
import { FaCircle } from "react-icons/fa6";
import StayInLoop from "./StayInLoop";

function StayConnected() {
  return (
    <div className="w-full h-full bg-[#080808]  text-white pt-24 flex flex-col items-center">
      <h1 className='text-7xl font-semibold relative before:absolute before:content-["STAY"] before:-top-20 before:-left-4 before:unbordered-white before:text-8xl before:w-full before:h-full before:opacity-50 after:absolute after:content-["CONNECTED"] after:-bottom-12 after:-left-4 after:unbordered-white after:text-8xl after:w-full after:h-full after:opacity-50 '> Stay Connected</h1>
      <div className="pt-52 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="heading">Don't Miss a Moment</h1>
          <p className="para">Be the first to know what’s next for ASS I AM. Sign up for our newsletter and get exclusive insights, updates, and opportunities delivered straight to your inbox.</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <FaCircle className="text-xs" />
          <p className="para"><b>Developer Diaries</b> - Follow our progress step by step.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCircle className="text-xs" />
          <p className="para"><b>Community Surveys</b> - Share yuor voice and help shape the future.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCircle className="text-xs" />
          <p className="para"><b>Event Announcement</b> - Stay in loop on exciting events and milestone.</p>
          </div>
        </div>
        <p className="para">We're just getting started, and you're a key part of this journey <br /><b>Subscribe now</b> and stay at the forefront of innovation.</p>
      </div>
      <StayInLoop/>
    </div>
  );
}

export default StayConnected;
