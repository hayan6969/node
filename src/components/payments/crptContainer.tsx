"use client"
import { requestAccount } from '@/lib/ethereum';
import { BrowserProvider, parseEther, parseUnits } from 'ethers';
import React, { useState } from 'react';
import { updateUserPayment, getNodesInfo,calculateTotalCost, convertUsdToEth, createPaymentDocument, updateNode, sendEmail } from "@/lib/appwrite/paymentFunctions";

const CrptContainer = ({totalCost,quantity}) => {
  // const [address, setAddress] = useState('');
  // const [amount, setAmount] = useState('');
  const [err, setErr] = useState(null);
  const [tsx, setTsx] = useState(null);

  const [account, setAccount] = useState<string | null>(null);

  //   MetaMask connection handler
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
      if (!window.ethereum) {
        alert('please install a crypto wallet');
        return;
      }
      // return;

      ///// MAX OF 10 Nodes can be purchased per transaction
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // console.log("Account access granted");
      //  CONVERT
      let amount = await convertUsdToEth(totalCost);
      console.log("ether Address:", process.env.NEXT_PUBLIC_CRYPTO_ADDRESS);
      console.log("ether Amount:", amount+"");
      // provder
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();


      // transcation 
      const transaction = await signer.sendTransaction({
        to: process.env.NEXT_PUBLIC_CRYPTO_ADDRESS,
        value: BigInt(Math.round(parseFloat(amount) * 1e18)).toString()
      });
      setTsx(transaction.hash);
      console.log("Transaction sent: ", transaction.hash);
      // confirm transcation first
      const receipt = await transaction.wait(1); // Wait for at least 1 confirmation

      if (receipt.status === 1) {
        console.log("✅ Transaction confirmed:", receipt);
        // ✅ Call createPaymentDocument after successful payment
        await createPaymentDocument(totalCost, quantity);
        // upadate the Nodes First
        await updateNode(quantity);
        await sendEmail(
          'PAYMENT SUCCESS',
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
    } catch (error) {
      console.log('transaction error', error.message);
      alert(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await startPayment();
  };

  return (
    <div style={ethContainer}>

      {account ? (
        <p>Connected to MetaMask: {account}</p>
      ) : (
        <button
          onClick={handleConnectMetaMask}
          className="w-40 rounded-full p-2 text-center border border-[#CD7F32] text-white"
        >
          Connect MetaMask
        </button>
      )}
      <h1>Send ETH</h1>
      <form onSubmit={handleSubmit} className="inputContainer" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button
          type="submit"
          style={{
            backgroundColor: 'blue',
            padding: '8px',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '10px 0 0 0'
          }}
        >
          Send ETH
        </button>
      </form>
    </div>
  );
};
const ethContainer = {
  backgroundColor: 'darkgrey',
  borderRadius: '10px',
  position: 'absolute',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: `rgb(5 255 42 / 73%) 0px 0.0625em 0.0625em 4px, 
                rgb(0 255 67 / 67%) 0px 0.125em 0.5em 6px, 
                rgb(0 255 104 / 59%) 0px 0px 0px 1px inset`
};

export default CrptContainer;