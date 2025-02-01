"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

function page() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#080808] pt-32 px-20">
        <div className=" flex gap-12 items-center justify-between h-screen">
          <div className="px-4 py-2 h-full w-3/5 flex flex-col gap-6 bg-black">
            <div className="flex justify-between items-center w-full gap-4">
              <h1 className="heading text-white">
                <span className="text-[#CD7F32]">ASS I AM</span> Node License
                <br />
                <span className="text-lg font-light">N/A</span>
              </h1>
              <div className="flex flex-col gap-2">
                <button className="w-40 rounded-full p-2 text-center border border-[#004AAD] text-white">
                  Ecosystem
                </button>
                <button className="w-40 rounded-full p-2 text-center border border-[#CD7F32] text-white">
                  More Details
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center text-center">
              <Image src="./laptop.svg" width={500} height={500} alt="" />
              <p className="text-white mt-8 para">
                License required to operate a ASS I AM Node.
                <br />
                Compatible with Windowa, MacOS, and Ubuntu.
              </p>
            </div>
          </div>
          <div className="w-2/5 h-full flex flex-col justify-between">
            <div className="w-full bg-black rounded-lg px-4 py-3 text-white">
              Price:
            </div>
            <div className="w-full h-full px-4 flex flex-col gap-4 text-white border-b border-slate-300">
              <div className="">Logo:</div>
              <div className="">Quantity</div>
              <div className="flex justify-center gap-2 px-8">
                <button
                  className="w-8 h-8 px-2 border rounded-lg text-xl flex justify-center items-center"
                  onClick={() => (counter > 0 ? setCounter(counter - 1) : "")}
                >
                  -
                </button>
                <div className="w-full border rounded-md text-center flex justify-center items-center">
                  {counter}
                </div>
                <button
                  className="w-8 h-8 px-2 pb-1 border rounded-lg text-lg flex justify-center items-center"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-full h-full px-4 flex flex-col gap-4 text-white">
              <div className="flex gap-2 p-4">
                <input type="checkbox" className="mb-2" />
                <p>I have read, understand and agree to the Terms of Service</p>
              </div>
              <div className="flex gap-2 p-4">
                <input type="checkbox" className="mb-2" />
                <p>I have read, understand and agree to the Terms of Service</p>
              </div>
              <div className="flex gap-2 p-4">
                <input type="checkbox" className="mb-2" />
                <p>I have read, understand and agree that Gala Games Founder’s Nodes are not investments</p>
              </div>
            </div>
            <div className="w-full bg-black rounded-lg px-4 py-3 text-white flex justify-center">
              <button className="w-10/12 p-2 bg-[#CD7F32] text-center rounded-2xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24">
        <Footer/>
        </div>
      </section>
    </>
  );
}

export default page;
