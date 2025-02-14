"use client";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/appwrite/userApi";
import { getPaymentDetails } from "@/lib/appwrite/paymentFunctions"; // Function to fetch order details

const Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const fetchOrders = async () => {
    if (!user || !user.payments_history) return;

    setLoadingOrders(true);
    try {
      const orderDetails = await Promise.all(
        user.payments_history.map(async (paymentId) => {
          return await getPaymentDetails(paymentId);
        })
      );
      setOrders(orderDetails);
      setShowOrders(true);
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setLoadingOrders(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return (
      <>
        <p>Please log in to view your order history.</p>
        <a href="/login" style={{ color: "blue" }}>Login Here</a>
      </>
    );
  }

  return (
    <div>
      {/* Show Orders Button */}
      <button 
        onClick={fetchOrders} 
        disabled={loadingOrders} 
        style={{ margin: "10px 0", padding: "8px 12px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}
      >
        {loadingOrders ? "Loading Orders..." : "Show Orders"}
      </button>

      {/* Display Orders if Show Orders is clicked */}
      {showOrders && (
        <div>
          <h2>Your Orders:</h2>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index}    style={{ 
                borderBottom: "1px solid gray", 
                padding: "10px", 
                display: "flex", 
                justifyContent: "space-between" 
              }}>
                <p><strong>Order ID:</strong> {order.$id}</p>
                <p><strong>Amount:</strong> ${order.total_cost}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Date:</strong> {new Date(order.$createdAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
