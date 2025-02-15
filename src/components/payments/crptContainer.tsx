"use client";
import { requestAccount } from "@/lib/ethereum";
import { BrowserProvider } from "ethers";
import React, { useState } from "react";
import {
  updateUserPayment,
  getNodesInfo,
  calculateTotalCost,
  convertUsdToEth,
  createPaymentDocument,
  updateNode,
  sendEmail,
} from "@/lib/appwrite/paymentFunctions";

// Define the props for CrptContainer
interface CrptContainerProps {
  totalCost: number;
  quantity: number;
}

const CrptContainer: React.FC<CrptContainerProps> = ({ totalCost, quantity }) => {
  // tsx holds the transaction hash
  const [tsx, setTsx] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  // MetaMask connection handler
  const handleConnectMetaMask = async () => {
    try {
      const connectedAccount = await requestAccount();
      setAccount(connectedAccount);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  async function startPayment() {
    try {
      // Cast window to any to access ethereum
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        alert("Please install a crypto wallet");
        return;
      }
      await ethereum.request({ method: "eth_requestAccounts" });
      
      // Convert USD to ETH (ensure the returned amount is not null)
      const amountResult = await convertUsdToEth(totalCost);
      if (amountResult === null || amountResult === undefined) {
        alert("Failed to convert USD to ETH");
        return;
      }
      const amountStr = String(amountResult);
      console.log("Ether Address:", process.env.NEXT_PUBLIC_CRYPTO_ADDRESS);
      console.log("Ether Amount:", amountStr);
      
      // Create provider and signer
      const provider = new BrowserProvider(ethereum);
      const signer = await provider.getSigner();

      // Send transaction
      const transaction = await signer.sendTransaction({
        to: process.env.NEXT_PUBLIC_CRYPTO_ADDRESS,
        value: BigInt(Math.round(parseFloat(amountStr) * 1e18)).toString(),
      });
      setTsx(transaction.hash);
      console.log("Transaction sent:", transaction.hash);
      
      // Wait for at least 1 confirmation
      const receipt = await transaction.wait(1);
      if (receipt && receipt.status === 1) {
        console.log("✅ Transaction confirmed:", receipt);
        // Create payment document, update node, and send confirmation email
        await createPaymentDocument(totalCost, quantity);
        await updateNode(quantity);
        await sendEmail(
          "PAYMENT SUCCESS",
          `Your payment was successful! ✅
          
- Total Cost: $${totalCost}
- Quantity Purchased: ${quantity}
          
Thank you for your purchase!`,
          `<h2 style="color: green;">Payment Successful! ✅</h2>
           <p><strong>Total Cost:</strong> $${totalCost}</p>
           <p><strong>Quantity Purchased:</strong> ${quantity}</p>
           <p>Thank you for your purchase!</p>`
        );
        alert("Transaction SUCCESS!");
      } else {
        console.log("❌ Transaction failed:", receipt);
        alert("Transaction FAILED!");
      }
    } catch (error: unknown) {
      const err = error as Error;
      // Check for insufficient funds error (casting to any for custom properties)
      if (((err as any).code === "INSUFFICIENT_FUNDS") || err.message.toLowerCase().includes("insufficient funds")) {
        console.log("Error: Insufficient funds for transaction.");
        alert("Error: Insufficient funds for transaction.");
      } else {
        console.error("Transaction error:", err);
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await startPayment();
  };

  return (
    <div>
      {account ? (
        <p>Connected to MetaMask: {account}</p>
      ) : (
        <button
          onClick={handleConnectMetaMask}
          className="w-40 rounded-full p-2 text-center border border-[#CD7F32] text-black"
        >
          Connect MetaMask
        </button>
      )}
      <h1>Send ETH</h1>
      <form
        onSubmit={handleSubmit}
        className="inputContainer"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            padding: "8px",
            borderRadius: "10px",
            cursor: "pointer",
            margin: "10px 0 0 0",
          }}
        >
          Send ETH
        </button>
      </form>
    </div>
  );
};

export default CrptContainer;
