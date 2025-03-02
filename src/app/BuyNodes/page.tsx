"use client";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import CrptContainer from "@/components/payments/crptContainer";
import PayPalPayment from "@/components/payments/PayPalPayment";
import { calculateTotalCost, getNodesInfo } from "@/lib/appwrite/paymentFunctions";
import React, { useState, useEffect } from "react";

function Page() {
  const [counter, setCounter] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "paypal" | null>(null);
  // totalCost is a number or null while loading
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false); // ✅ Modal State

  // Agreement Checkboxes
  const [agreements, setAgreements] = useState({
    terms: false,
    refundPolicy: false,
    acknowledgment: false,
  });

  useEffect(() => {
    (async () => {
      let nodesInfo = await getNodesInfo();
      let totalCostResponse = await calculateTotalCost(nodesInfo, counter);
      setTotalCost(totalCostResponse);
      // console.log("total cost is: ", totalCost);
    })();
  }, [counter]);

  const handleBuyNow = () => {
    if (!localStorage.getItem("isLoggedIn")) {
      alert("Login before buying!");
      return;
    }
    if (!agreements.terms || !agreements.refundPolicy || !agreements.acknowledgment) {
      alert("You must agree to all terms before proceeding.");
      return;
    }

    setShowModal(true); // ✅ Show Modal Instead of Payment Process
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#080808] pt-32 max-md:pt-16 px-20 max-md:px-10 max-sm:px-4">
        <div className="flex max-lg:flex-col gap-12 justify-between min-h-screen">
          <div className="px-4 py-2 h-full w-3/5 max-lg:w-full flex flex-col gap-6 bg-black">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:text-center w-full gap-4">
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
                <br className="max-md:hidden block" />
                Compatible with Windows, MacOS, and Ubuntu.
              </p>
            </div>
          </div>

          <div className="w-2/5 max-lg:w-full h-full flex flex-col gap-2 justify-center">
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

            {/* ✅ Agreements Section */}
            <div className="agreements text-white text-sm flex flex-col gap-2 mt-4">
              <label>
                <input
                  type="checkbox"
                  checked={agreements.terms}
                  onChange={() =>
                    setAgreements({ ...agreements, terms: !agreements.terms })
                  }
                />{" "}
                I agree to the **Terms & Conditions** (No refunds for digital goods).
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreements.refundPolicy}
                  onChange={() =>
                    setAgreements({ ...agreements, refundPolicy: !agreements.refundPolicy })
                  }
                />{" "}
                I understand that **once the transaction is confirmed, it is final and non-reversible**.
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreements.acknowledgment}
                  onChange={() =>
                    setAgreements({ ...agreements, acknowledgment: !agreements.acknowledgment })
                  }
                />{" "}
                I acknowledge that **I am fully responsible for my purchase and wallet security**.
              </label>
            </div>

            {/* ✅ Buy Now Button */}
            <div className="w-full bg-black rounded-lg px-4 py-3 text-white flex justify-center">
              <button
                className="w-10/12 p-2 text-center rounded-2xl"
                style={{
                  backgroundColor:
                    agreements.terms && agreements.refundPolicy && agreements.acknowledgment
                      ? "#CD7F32"
                      : "gray",
                  cursor:
                    agreements.terms && agreements.refundPolicy && agreements.acknowledgment
                      ? "pointer"
                      : "not-allowed",
                }}
                disabled={
                  !agreements.terms || !agreements.refundPolicy || !agreements.acknowledgment
                }
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Payment Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
              <h2 className="text-lg font-bold mb-4">Select Payment Method</h2>
              <button
                className={`w-full rounded-full p-2 text-center border mb-2 ${
                  paymentMethod === "crypto" ? "bg-[#CD7F32]" : "border-[#CD7F32]"
                }`}
                onClick={() => setPaymentMethod("crypto")}
              >
                Pay with Crypto
              </button>
              <button
                className={`w-full rounded-full p-2 text-center border ${
                  paymentMethod === "paypal" ? "bg-[#CD7F32]" : "border-[#CD7F32]"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                Pay with Paypal
              </button>

              {/* Payment Component */}
              <div className="mt-4">
                {paymentMethod === "crypto" && totalCost !== null && (
                  <CrptContainer totalCost={totalCost} quantity={counter} />
                )}
                {paymentMethod === "paypal" && totalCost !== null && (
                  <PayPalPayment totalCost={totalCost} quantity={counter} />
                )}
              </div>

              <button
                className="mt-4 w-full bg-gray-300 p-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-24">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Page;