"use client";
import React, { useState, useEffect } from "react";
import { getCurrentUser, updateUserData } from "@/lib/appwrite/userApi";
import { toast, Toaster } from "sonner";

export default function Address() {
  // State for managing edit mode
  const [editAddress, setEditAddress] = useState(false);

  // State for holding address fields
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Loading state for update
  const [loading, setLoading] = useState(false);

  // Function to split address into fields
  const splitAddress = (address: string) => {
    if (address) {
      const parts = address.split("+");
      setStreet(parts[0] || "");
      setHouseNumber(parts[1] || "");
      setZip(parts[2] || "");
      setCity(parts[3] || "");
      setCountry(parts[4] || "");
    }
  };

  // Fetch current user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser();
        if (user && user.address) {
          splitAddress(user.address);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast("Error fetching user data.");
      }
    };
    fetchUserData();
  }, []);

  // Handle Save Address
  const handleSave = async () => {
    const fullAddress = `${street}+${houseNumber}+${zip}+${city}+${country}`;
    setLoading(true);
    try {
      await updateUserData({ address: fullAddress });
      setEditAddress(false);
      toast("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
      toast("Error updating address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Common styles for a consistent UX
  const fieldContainerClass =
    "border border-slate-500 rounded-full flex items-center px-3 py-2";
  const inlineButtonClass =
    "border border-[#049ABC] rounded-full px-4 py-1 text-sm ml-2";
  const inputClass = "w-full bg-transparent text-white text-sm outline-none";

  return (
    <>
      <section className="bg-black rounded-2xl py-8 px-10 max-sm:px-1 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden">
        <h1 className="text-2xl font-semibold">Address:</h1>
        <div className="flex flex-col gap-4">
          {[
            { label: "Street", value: street, setter: setStreet },
            { label: "House Number", value: houseNumber, setter: setHouseNumber },
            { label: "ZIP", value: zip, setter: setZip },
            { label: "City", value: city, setter: setCity },
            { label: "Country", value: country, setter: setCountry },
          ].map(({ label, value, setter }) => (
            <div key={label} className="flex flex-col gap-2">
              <p>{label}</p>
              <div className={fieldContainerClass}>
                {editAddress ? (
                  <input
                    type="text"
                    className={inputClass}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                  />
                ) : (
                  <div className="w-full text-sm text-white">{value}</div>
                )}
                <button
                  className={inlineButtonClass}
                  onClick={() => setEditAddress(!editAddress)}
                >
                  {editAddress ? "Save" : "Edit"}
                </button>
              </div>
            </div>
          ))}
          {editAddress && (
            <div className="mt-4">
              <button
                className="border border-[#049ABC] rounded-full px-4 py-1 text-sm"
                disabled={loading}
                onClick={handleSave}
              >
                {loading ? "Updating..." : "Update Address"}
              </button>
            </div>
          )}
        </div>
      </section>
      <Toaster />
    </>
  );
}
