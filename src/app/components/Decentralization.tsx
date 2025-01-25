import React from "react";
// import Roadmap from "./Roadmap";
import Blocks from "./ui/Blocks";
import Roadmap from "./Roadmap";
import BlockEndSection from "./ui/BlockEndSection";

function Decentralization() {
  return (
    <div className=" overflow-x-hidden p-10 md:p-20 text-white bg-[#080808]  border-b border-2-gray-500 flex flex-col gap-12  relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-blue-700 before:rounded-full before:bg-opacity-20 before:top-96 before:-translate-x-1/2 after:-right-0 after:translate-x-1/3 after:top-12 after:w-96 after:h-96 after:blur-3xl after:absolute after:bg-blue-700 after:rounded-full z-10 after:bg-opacity-20 after:mt-4">
      <div className="flex flex-col gap-4">
        <h1 className="heading capatilize">The power of <h1 className="text-[8vw] mt-10 mb-14 font-extrabold unbordered-white">
          DECENTRALIZED
        </h1></h1>
        
        <p className="para">
          ASS I AM leverages cutting-edge blockchain technology to create a
          fully decentralized platform. Your content, interactions, and
          experiences are protected by a secure network of decentralized nodes
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="heading capatilize">
          Say goodbye to centratized control.
        </h1>
        <p className="para">
          Say goodbye to centralized control and embrace a network where you can
          actively contribute to the platform’s strength and evolution. At the
          heart of ASS I AM lies decentralization eliminating risks tied to
          centralized servers, such as data breaches, single points of failure,
          and content manipulation
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="heading capatilize">
          The power of blockchain in action.
        </h1>
        <p className="para">
        Smart Contracts ensure fair compensation for creators, while tokenized rewards recognize and value user contributions. Transparency and security are embedded into every interaction.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="heading text-white mt-10 md:mt-24">
          The Foundation of Decentralization
        </h1>
        <p className="text-blue-700 font-semibold">Clarity through Structure &nbsp;|&nbsp; Power through Connection &nbsp;|&nbsp; Freedom through Community</p>
      </div>
       <Roadmap /> 
       {/* <Blocks /> */}
      <BlockEndSection />
    </div>
  );
}

export default Decentralization;
