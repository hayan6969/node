"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import { requestAccount } from "../../lib/ethereum"; // MetaMask connection logic
import CrptContainer from "@/components/payments/crptContainer";
import PayPalPayment from "@/components/payments/PayPalPayment";
import { calculateTotalCost, getNodesInfo } from "@/lib/appwrite/paymentFunctions";

function Page() {
  const [counter, setCounter] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "paypal" | null>(null);
  const [totalCost, setTotalCost] = useState(null);

  // Agreement Checkboxes
  const [agreements, setAgreements] = useState({
    terms: false,
    refundPolicy: false,
    acknowledgment: false
  });

  useEffect(() => {
    (async () => {
      let nodesInfo = await getNodesInfo();
      let totalCostResponse = await calculateTotalCost(nodesInfo, counter);
      setTotalCost(totalCostResponse);
      console.log("total cost is: ", totalCost);
    })();
  }, [counter]);

  const handleBuyNow = () => {
    if (!agreements.terms || !agreements.refundPolicy || !agreements.acknowledgment) {
      alert("You must agree to all terms before proceeding.");
      return;
    }

    alert("✅ Payment Process Initiated!");
    // Continue with buy process...
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#080808] pt-32 px-20">
        <div className="flex gap-12 items-center justify-between h-screen">
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
                License required to operate an ASS I AM Node.
                <br />
                Compatible with Windows, MacOS, and Ubuntu.
              </p>
            </div>
          </div>

          <div className="w-2/5 h-full flex flex-col gap-2">
            {/* Pricing Section */}
            <div className="w-full px-4 flex flex-col gap-4 text-white border-b border-slate-300">
              <div>Logo:</div>
              <div>Quantity</div>
              <div className="flex justify-center gap-2 px-8">
                <button
                  className="w-8 h-8 px-2 border rounded-lg text-xl flex justify-center items-center"
                  onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
                >
                  -
                </button>
                <div className="w-full border rounded-md text-center flex justify-center items-center">
                  {counter}
                </div>
                <button
                  className="w-8 h-8 px-2 pb-1 border rounded-lg text-lg flex justify-center items-center"
                  onClick={() => setCounter(counter < 10 ? counter + 1 : counter)}
                >
                  +
                </button>
              </div>
            </div>

            {/* ✅ Hardcoded Agreements Section */}
            <div className="agreements text-white text-sm flex flex-col gap-2 mt-4">
              <label>
                <input
                  type="checkbox"
                  checked={agreements.terms}
                  onChange={() => setAgreements({ ...agreements, terms: !agreements.terms })}
                />{" "}
                I agree to the **Terms & Conditions** (No refunds for digital goods).
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreements.refundPolicy}
                  onChange={() => setAgreements({ ...agreements, refundPolicy: !agreements.refundPolicy })}
                />{" "}
                I understand that **once the transaction is confirmed, it is final and non-reversible**.
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreements.acknowledgment}
                  onChange={() => setAgreements({ ...agreements, acknowledgment: !agreements.acknowledgment })}
                />{" "}
                I acknowledge that **I am fully responsible for my purchase and wallet security**.
              </label>
            </div>

            {/* Payment Method Selection */}
            <div className="paymentMethodSelection flex flex-col gap-4 text-white">
              <button
                className={`w-40 rounded-full p-2 text-center border ${
                  paymentMethod === "crypto" ? "bg-[#CD7F32]" : "border-[#CD7F32]"
                } text-white`}
                onClick={() => setPaymentMethod("crypto")}
              >
                Pay with Crypto
              </button>
              <button
                className={`w-40 rounded-full p-2 text-center border ${
                  paymentMethod === "paypal" ? "bg-[#CD7F32]" : "border-[#CD7F32]"
                } text-white`}
                onClick={() => setPaymentMethod("paypal")}
              >
                Pay with Paypal
              </button>
            </div>

            {/* Payment Component */}
            <div style={{ display: "flex", gap: "15px" }}>
              {paymentMethod === "crypto" && <CrptContainer totalCost={totalCost} quantity={counter} />}
              {paymentMethod === "paypal" && <PayPalPayment totalCost={totalCost} quantity={counter} />}
            </div>

            {/* ✅ Buy Now Button (Disabled until all agreements are checked) */}
            <div className="w-full bg-black rounded-lg px-4 py-3 text-white flex justify-center">
              <button
                className="w-10/12 p-2 text-center rounded-2xl"
                style={{
                  backgroundColor: agreements.terms && agreements.refundPolicy && agreements.acknowledgment ? "#CD7F32" : "gray",
                  cursor: agreements.terms && agreements.refundPolicy && agreements.acknowledgment ? "pointer" : "not-allowed",
                }}
                disabled={!agreements.terms || !agreements.refundPolicy || !agreements.acknowledgment}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Page;
