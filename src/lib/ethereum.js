// lib/ethereum.js
import { ethers } from "ethers";

// Check if MetaMask is installed
export const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== "undefined";
};

// Request account from MetaMask
export const requestAccount = async () => {
  if (!isMetaMaskInstalled()) {
    alert("MetaMask is not installed!");
    return;
  }
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
};

// Get the provider (Ethereum network details)
export const getProvider = () => {
  if (!isMetaMaskInstalled()) {
    alert("MetaMask is not installed!");
    return;
  }
  return new ethers.providers.Web3Provider(window.ethereum);
};

// Send transaction (3 ETH)
export const sendTransaction = async (toAddress, amountInEther) => {
  try {
    const provider = getProvider();
    const signer = provider.getSigner();  // Get the MetaMask wallet signer
    const transaction = {
      to: toAddress,
      value: ethers.utils.parseEther(amountInEther),  // Convert the amount to Wei
    };

    // Send the transaction and wait for it to be mined
    const tx = await signer.sendTransaction(transaction);
    await tx.wait();  // Wait for the transaction to be confirmed
    alert("Transaction Successful!");
    console.log(tx);
  } catch (error) {
    alert("Transaction failed: " + error.message);
    console.error(error);
  }
};
