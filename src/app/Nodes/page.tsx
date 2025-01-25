import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import StayInLoop from "../components/StayInLoop";

function page() {
  return (
    <>
      <Header />
      <section className="w-screen flex flex-col gap-12 items-center md:p-20 p-10 pt-20 pb-0 md:pb-0 bg-[#080808] min-h-screen text-white overflow-x-hidden">
        <h1 className="text-8xl unbordered-white mt-8">DECENTRALIZATION</h1>
        <div className="py-10 flex flex-col gap-4 w-full items-center text-center">
          <p className="heading">The Backbone of Our Decentralized Network</p>
          <p className="w-2/3 para">
            Skip into the future ASS I AM, where transparency, security, and
            fairness aren't just features - they're the foundation
          </p>
        </div>
        <div className="w-full para pr-8">
            <p className="w-1/2">
          Nodes are the foundation of ASS I AM, powering the decentralized
          network that drives our vision. These independent systems work
          together to ensure the stability, security, and efficiency of the
          platform. By eliminating reliance on centralized systems nodes make
          the centralized systems, nodes make the network more robust,
          resilient, and adaptable.
            </p>
        </div>
        <div className="w-full flex flex-col gap-6">
            <h3 className="heading">Why Decentralization is Essential</h3>
            <p className="para">Decentralization is at the heart of our mission. By distributing data and tasks across multiple nodes, we eliminate the vulnerabilities of centralized platforms, ensuring:</p>
            <div className="flex flex-col gap-3">
                <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>No Singal Point of Failure:</b> The network remians operational even if one node goes offline.</p>
                <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>Enhanced Security:</b> Decentralized data storage signficantly reduces the risk of attack.</p>
                <p className="para flex gap-2 items-center"><FaCircle className="text-xs" /><b>Resilience and Scalability:</b> The system evolves and adapts seamlessly to the growing needs of the community.</p>
            </div>
            <p className="para my-4">This decentralized approach guarantees that ASS I AM delivers a reliable, transparent, and secure platform for creators, users, and supporters alike.</p>
            <h5 className="text-2xl font-medium">Types of Nodes in ASS I AM</h5>
            <p className="para my-4">To support the diverse needs of our expanding ecosystem, ASS I AM introduces two key types of nodes:</p>
            <div className="w-full flex gap-24 justify-center py-12">
                <div className="w-80 h-96 bg-gradient-to-b from-[#004AAD] to-black rounded-tr-[5rem] flex flex-col items-center p-6 gap-6">
                    <Image src="./fa_bank.svg" width={150} height={150} alt="bank_svg" />
                    <h5 className="text-2xl font-medium pt-2 text-center w-full border-t-2 border-[#004AAD]">Founder Nodes</h5>
                    <p className="para">The cornerstone of the network, forming the essential foundation for scalability and functionality.</p>
                </div>
                <div className="w-80 h-96 bg-gradient-to-b from-[#004AAD] to-black rounded-tl-[5rem] flex flex-col items-center p-6 gap-6">
                    <Image src="./clarity_clipboard-line.svg" width={150} height={150} alt="clipboard" />
                    <h5 className="text-2xl font-medium pt-2 text-center w-full border-t-2 border-[#004AAD]">Specialized Nodes</h5>
                    <p className="para">Future nodes designed to handle specific tasks, such as content, interaction, or gaming.</p>
                </div>
            </div>
            <div className="w-full flex-col flex gap-6">
                <h5 className="text-2xl font-medium">Supporting the Vision</h5>
            <p className="para">
            Owning a node isn’t an <b>investment</b> — it’s a <b>voluntary commitment</b> to driving <b>decentralization</b> and <b>innovation</b>. It’s more than running infrastructure; it’s about building a platform rooted in <b>fairness</b>, <b>transparency</b>, and <b>community empowerment.</b> As a node operator, you play a crucial <b>role</b> in keeping the system <b>adaptable</b> and future proof, creating a space where <b>creators</b>, users, and contributors can thrive together. together. This isn’t speculation—it’s about fostering <b>meaningful change</b> and supporting an <b>adult entertainment platform</b> that puts its community first.
            </p>
          <p className="heading w-full text-center py-12">Join the movement. Support the vision,Be part of something revolutionary.</p>
          <div className="flex gap-8 w-full">
            <div className="w-2/3 flex flex-col gap-6 py-6 px-10 bg-[#FF8730] rounded-xl">
            <div>
            <span className="px-6 py-1 border border-white rounded-full">Nodes</span>
            </div>
            <h5 className="text-xl font-semibold">Get your Node Now</h5>
            <p>Transform your home computer into a power ASS I AM Network node. Secure your Node today for exclusive rewards like tokens and rare NFTs. Enhance our platform's transparency,
security, and performance, whilst supporting thefuture of adult entertainment and
technology. Join us now and make a real
impact!</p>
<div>
<button className="px-4 cursor-pointer py-1 bg-black border border-[#004AAD] rounded-full">Get a Node</button>
</div>
            </div>
            <div className="w-1/3 h-80 flex flex-col gap-6 p-6 items-center bg-gradient-to-r from-[#0C13C1] to-black rounded-xl">
            <span className="px-6 py-1 border border-white rounded-full">Nodes</span>
            <h5 className="text-xl font-semibold w-full">Discover the ASS I AM</h5>
            <p className="w-full ">By becoming a ASS I AM Node Operator,
you join an elite group pf enthusiasts
dedicated tp building a better future fpr
adult entertainment.</p>
<div className="pt-6">
<button className="px-4 cursor-pointer py-1 bg-black border border-[#004AAD] rounded-full">Read More</button>
</div>
            </div>
          </div>
        </div>
        </div>
        <StayInLoop/>
      <Footer/>
      </section>
    </>
  );
}

export default page;
