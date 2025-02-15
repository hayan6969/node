import { useEffect, useRef, useState } from "react";
import {createOrder, createPaymentDocument, sendEmail, sendPaymentEmail, updateNode} from '@/lib/appwrite/paymentFunctions';

const PayPalPayment = ({ totalCost,quantity }) => {
  const paypalRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadPayPalScript = () => {
      if (window.paypal) {
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
    if (loaded && window.paypal && paypalRef.current) {
      paypalRef.current.innerHTML = ""; // Clear previous buttons before re-rendering

      window.paypal
        .Buttons({
          createOrder: async () => {
            try {
              const orderId = await createOrder(totalCost,quantity);
              return orderId
            } catch (error) {
              console.log('orderId Error:',error);
            }
          },
          onApprove: async (data, actions) => {
            try {
              const details = await actions.order.capture();
              
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
              
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              console.log("Transaction Details:", details);
            } catch (error) {
              console.error("Error capturing PayPal transaction:", error);
              alert("Payment processing failed!");
            }
          },
          onError: (err) => {
            alert("PAYMENT ERROR!");
            console.error("PayPal Checkout Error:", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [loaded, totalCost]); // Update button when totalCost changes

  return <div ref={paypalRef}></div>;
};

export default PayPalPayment;