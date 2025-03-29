"use client";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/appwrite/userApi";
import { getPaymentDetails } from "@/lib/appwrite/paymentFunctions"; // Function to fetch order details

// Define a User interface including the payments history.
interface User {
  payments_history: string[];
  // Add other user properties as needed.
}

// Define an Order interface matching the expected order details.
interface Order {
  $id: string;
  total_cost: number;
  quantity: number;
  $createdAt: string;
  // Add other order properties as needed.
}

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showOrders, setShowOrders] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        // Cast currentUser to our User type if it exists.
        setUser(currentUser as unknown as User);
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
      // Fetch order details and force the cast using 'unknown'
      const orderDetails = await Promise.all(
        user.payments_history.map(async (paymentId: string) => {
          const details = await getPaymentDetails(paymentId);
          // If details is undefined, return undefined
          return details ? (details as unknown as Order) : undefined;
        })
      );
      // Filter out any undefined values
      const validOrders = orderDetails.filter(
        (order): order is Order => order !== undefined
      );
      setOrders(validOrders);
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
        <a href="/login" style={{ color: "blue" }}>
          Login Here
        </a>
      </>
    );
  }

  return (
    <div className="text-white">
      {/* Show Orders Button */}
      <button
        onClick={fetchOrders}
        disabled={loadingOrders}
        style={{
          margin: "10px 0",
          padding: "8px 12px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loadingOrders ? "Loading Orders..." : "Show Orders"}
      </button>

      {/* Display Orders if Show Orders is clicked */}
      {showOrders && (
        <div>
          <h2>Your Orders:</h2>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order.$id}
                style={{
                  borderBottom: "1px solid gray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  <strong>Order ID:</strong> {order.$id}
                </p>
                <p>
                  <strong>Amount:</strong> ${order.total_cost}
                </p>
                <p>
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.$createdAt).toLocaleString()}
                </p>
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
