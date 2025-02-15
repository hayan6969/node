"use client";
import { useEffect, useRef, useState } from "react";
import {
  createOrder,
  createPaymentDocument,
  sendEmail,
  updateNode,
} from "@/lib/appwrite/paymentFunctions";

interface PayPalPaymentProps {
  totalCost: number;
  quantity: number;
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ totalCost, quantity }) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadPayPalScript = () => {
      // Use a type assertion for window.paypal
      if ((window as any).paypal) {
        setLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AbRyAGAwVctsD1myC-vRS_1owpHv8w8Rg2grzlcPmnv9OgFFL9M_UD48RCzR_WmC7yCcTgcvgL4nJRBJ`;
      script.async = true;
      script.onload = () => setLoaded(true);
      script.onerror = () => console.error("PayPal SDK failed to load.");
      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, []);

  useEffect(() => {
    if (loaded && (window as any).paypal && paypalRef.current) {
      // Clear previous buttons before rendering
      paypalRef.current.innerHTML = "";

      (window as any).paypal
        .Buttons({
          createOrder: async () => {
            try {
              const orderId = await createOrder(totalCost, quantity);
              return orderId;
            } catch (error) {
              console.error("orderId Error:", error);
            }
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const details = await actions.order.capture();
              // Call createPaymentDocument after successful payment
              await createPaymentDocument(totalCost, quantity);
              // Update the node
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

              alert(`Transaction completed by ${details.payer.name.given_name}`);
              console.log("Transaction Details:", details);
            } catch (error) {
              console.error("Error capturing PayPal transaction:", error);
              alert("Payment processing failed!");
            }
          },
          onError: (err: any) => {
            alert("PAYMENT ERROR!");
            console.error("PayPal Checkout Error:", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [loaded, totalCost, quantity]);

  return <div ref={paypalRef}></div>;
};

export default PayPalPayment;
