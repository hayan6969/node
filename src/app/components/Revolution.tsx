import Image from "next/image";
import React from "react";
import StayConnected from "./StayConnected";

function Revolution() {
  return (
    <>
      <div className="p-10 md:p-20 bg-[#080808] flex flex-col gap-10 items-center relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-blue-700 before:rounded-full before:bg-opacity-15 before:-top-20  before:left-1/2 before:-translate-x-1/2 after:-right-0 after:translate-x-1/3 after:top-96 after:w-96 after:h-96 after:blur-3xl after:absolute after:bg-[#cf9f45] after:rounded-full z-10 after:bg-opacity-15 after:mt-4 text-white overflow-hidden">
        <h1 className="text-7xl font-semibold relative">
          <Image
            src="./jointheText.svg"
            height="200"
            width="600"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 bottom-1/2"
          />
          Decentralized Revolution
        </h1>
        <p className="para">
          The ASS I AM network thrives on decentralization, and our node
          operators are at the heart of its smooth and secure functionality. By
          distributing operations across a global network of nodes, we ensure
          reliability, eliminate vulnerabilities, and enhance overall platform
          performance.
        </p>
        <div className="flex flex-col gap-4 w-full py-4">
          <h4 className="heading">Why Become a Node Operator</h4>
          <p className="para">Be an Integral Part of the System</p>
        </div>
        <div className="w-full flex  gap-8 ">
          <div className="flex gap-8 w-full">
            <Image
              src="./fa_gears.svg"
              width={100}
              height={100}
              alt={"gears_icon"}
            />
            <div className="felx flex-col gap-4 ">
              <h5 className="heading">Enhance Reliability</h5>
              <p className="text-sm">
                Strengthen the platform by hosting nodes worldwide, ensuring a
                failure-resistant infrastructure
              </p>
            </div>
          </div>
          <div className="flex gap-8  w-full">
            <Image
              src="./pepicons-print_internet.svg"
              width={100}
              height={100}
              alt={"Globe_icon"}
            />
            <div className="felx flex-col gap-6">
              <h5 className="heading">Support Scalability</h5>
              <p className="text-sm">
                Strengthen the platform by hosting nodes worldwide, ensuring a
                failure-resistant infrastructure
              </p>
            </div>
          </div>
          <div className="flex gap-8  w-full">
            <Image
              src="./vaadin_diamond-o.svg"
              width={100}
              height={100}
              alt={"diamond_icons"}
            />
            <div className="felx flex-col gap-6">
              <h5 className="heading">Earn Incentives</h5>
              <p className="text-sm">
                Strengthen the platform by hosting nodes worldwide, ensuring a
                failure-resistant infrastructure
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 w-full py-4">
            <h4 className="heading">Make a Meaningful Impact</h4>
            <p className="para">
              Your role as a node operator goes beyond technology. You are a
              vital contributor to a fairer, more transparent, and
              creator-focused environment. Your efforts empower users, creators,
              and contributors across the platform, building a community that
              values your input
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full py-4">
            <h4 className="heading">Step Into the Future</h4>
            <p className="para">
              Support us and be part of a groundbreaking movement. By operating
              a node, you help shape the next era of entertainment and
              technology, while becoming a recognized leader in innovation.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-2/3 h-80 flex flex-col p-4 gap-6 justify-between bg-gradient-to-b from-[#FFDE59] to-[#CD7F32] bg-opacity-60 rounded-lg">
            <div className="w-24 py-1 border border-white rounded-full text-center">
              Node
            </div>
            <div className="flex flex-col gap-6 h-full">
              <h6 className="text-lg font-semibold">Det your Node Now</h6>
              <p className="text-sm">
                Transform your home computer into a powerful ASS I AM Network
                node. Secure your Node today for exclusive rewards like tokens
                and tar NFTs. Enhance our platform's transparency security, and
                performance, whilst supporting the future of adult entertainment
                and blockchain technology. Join us now and make a real impact
              </p>
            </div>
            <button className="w-24 text-sm py-1 bg-black text-white border border-[#049ABC] rounded-full">
              Get a Node
            </button>
          </div>


          <div className="w-1/3 h-80 flex flex-col p-4 gap-6 justify-between bg-gradient-to-r from-[#004AAD] to-black bg-opacity-25 rounded-lg">
          <div className="w-28 py-1 border border-white rounded-full text-center">
              Node
            </div>
            <div className="flex flex-col gap-6 h-full">
              <h6 className="text-lg font-semibold">Discover the ASS I AM</h6>
              <p className="text-sm">
                By becoming a ASS I AM Node Operator, you join an elite group pf
                enthusiasts dedicated tp building a better future fpr adult
                entertainment.
              </p>
            </div>
            
            <button className="w-24 text-sm py-1 bg-black text-white border border-[#049ABC] rounded-full">
              Get a Node
            </button>
          </div>
        </div>
        <StayConnected />
      </div>
    </>
  );
}

export default Revolution;
