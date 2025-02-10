import { ID, Query } from "appwrite";
import { account, databases } from "./appwrite";
import {getCurrentUser} from './userApi';

export const calculateTotalCost = (nodesInfo, purchase_quantity) => {
    if (purchase_quantity < 1 || purchase_quantity > 10) {
        throw new Error("You can only buy between 1 and 10 nodes per transaction.");
    }

    if (nodesInfo.available_nodes < purchase_quantity) {
        throw new Error("Not enough nodes available for purchase.");
    }

    let totalCost = 0;
    let { price_per_node, nodes_sold, increment_step, price_increase } = nodesInfo;

    // Adjust price based on nodes already sold
    price_per_node += Math.floor(nodes_sold / increment_step) * price_increase;

    for (let i = 0; i < purchase_quantity; i++) {
        totalCost += price_per_node; // Add current price to total cost
        nodes_sold++;

        // Increase price every `increment_step` nodes sold
        if (nodes_sold % increment_step === 0) {
            price_per_node += price_increase;
        }
    }

    return totalCost;
};

export async function convertUsdToEth(usdAmount) {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        
        if (!data.ethereum || !data.ethereum.usd) {
            throw new Error("Failed to fetch Ethereum price.");
        }

        const ethPrice = data.ethereum.usd; // 1 ETH price in USD
        const ethAmount = usdAmount / ethPrice; // Convert USD to ETH

        return ethAmount;
    } catch (error) {
        console.error("Error converting USD to ETH:", error);
        return null;
    }
}

export const sendEmail = async (subject,text,html) => {
    try {
        
        let user = await getCurrentUser();
        console.log('sending payment email',user.email);

        const response = await fetch("/api/email-send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: user.email,  // Change this to a real email
            subject: subject,
            text: text,
            html,html
          }),
        });
      
        const data = await response.json();
        // console.log(data);
        // console.log('payment email sent success!');
        
    } catch (error) {
        console.log('Error while sending email:',error);
    }
  };
  

export const createOrder = async (totalCost,quantity) => {
    const response = await fetch("/api/paypal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalCost:totalCost,quantity: quantity }),
    });
  
    const data = await response.json();
    return data.orderID; // Use this orderID in your PayPal button
  };

export const getNodesInfo = async () => {
    try {
        console.log('getting info');
        
        const document = await databases.getDocument(process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_NODES_COLLECTION,"67a611540017a9fbc0c9");
        console.log(document);
        
        return document;
    } catch (error) {
        console.error("Error fetching nodesInfo:", error);
        throw error;
    }
}

export const createPaymentDocument = async (total_cost,quantity) => {
    try {
        console.log('creating payment doc:',total_cost,quantity);
        
        const paymentCreated = await databases.createDocument(
            process.env.NEXT_PUBLIC_DB_ID,  // Database ID
            process.env.NEXT_PUBLIC_PAYMENTS_COLLECTION,  // Collection ID
            ID.unique(),   
            {
                total_cost:total_cost,
                quantity:quantity
            });
        console.log('payment create Success!',paymentCreated);
        // push to  current user payments_history
        await updateUserPayment(paymentCreated.$id);
        return paymentCreated;
    } catch (error) {
        console.log('payment creating success');
    }
}


export const updateNode = async (nodes_sold) => {
    try {
      // Fetch current node data
      const nodeDoc = await databases.getDocument(
        process.env.NEXT_PUBLIC_DB_ID,            // Database ID
        process.env.NEXT_PUBLIC_NODES_COLLECTION, // Collection ID
        "67a611540017a9fbc0c9"       // Node document ID
      );
  
      if (!nodeDoc) {
        throw new Error("Node document not found");
      }
  
      // Calculate new nodes_sold count
      const updatedNodesSold = nodeDoc.nodes_sold + nodes_sold;
  
      // Update the document with the new nodes_sold value
      const response = await databases.updateDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_NODES_COLLECTION,
        "67a611540017a9fbc0c9",
        { nodes_sold: updatedNodesSold }
      );
  
      console.log("Nodes sold updated successfully:", response);
      return response;
    } catch (error) {
      console.error("Error updating nodes_sold:", error.message);
      throw error;
    }
  };

export const updateUserPayment = async (paymentId) => {
  try {
    let user = await getCurrentUser();
    if (!user) throw new Error("User not found");

    console.log("Updating payment history for:", user.email);

    // Fetch the existing user document
    const userDoc = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID, // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, // Collection ID
      user.$id // Use the user's existing document ID
    );
    console.log('got user');
    
    // Ensure payments_history is an array, then append new payment ID
    const updatedPayments = userDoc.payments_history || [];
    updatedPayments.push(paymentId);
    console.log('pushing user');
    
    // Update the user document
    const response = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DB_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION,
      user.$id, // Update the existing user document
      {
        payments_history: updatedPayments, // Append new payment ID
      }
    );

    console.log("Payment history updated successfully");
    return response;
  } catch (error) {
    console.error("Error updating payment history:", error.message);
  }
};
