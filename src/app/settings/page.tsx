"use client";
import React, { useState, useEffect } from "react";
import { updateUserData, getCurrentUser } from "@/lib/appwrite/userApi";
import { toast, Toaster } from "sonner";

function Account() {
  // State for managing edit mode for each field
  const [editUsername, setEditUsername] = useState(false);
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  // State for holding values
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [phone, setPhone] = useState("");

  // State for initial values
  const [initialUsername, setInitialUsername] = useState("");
  const [initialFirstName, setInitialFirstName] = useState("");
  const [initialLastName, setInitialLastName] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialPhone, setInitialPhone] = useState("");

  // Loading state for update
  const [loading, setLoading] = useState(false);

  // Fetch current user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUsername(userData.username || "");
          setFirstName(userData.first_name || "");
          setLastName(userData.last_name || "");
          setEmail(userData.email || "");
          setPhone(userData.phone || "");
          setUserId(userData.$id || "");

          // Save initial values for later comparison
          setInitialUsername(userData.username || "");
          setInitialFirstName(userData.first_name || "");
          setInitialLastName(userData.last_name || "");
          setInitialEmail(userData.email || "");
          setInitialPhone(userData.phone || "");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  // Compute if any editable field has been modified
  const isModified =
    username !== initialUsername ||
    firstName !== initialFirstName ||
    lastName !== initialLastName ||
    phone !== initialPhone;

  // Function to handle update
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedData = {
        username,
        first_name: firstName,
        last_name: lastName,
        phone,
      };

      const userUpdated = await updateUserData(updatedData);
      toast("User data updated successfully!");
      // Update the initial values to reflect the saved changes
      setInitialUsername(username);
      setInitialFirstName(firstName);
      setInitialLastName(lastName);
      setInitialPhone(phone);
      // Exit edit mode for all fields
      setEditUsername(false);
      setEditFirstName(false);
      setEditLastName(false);
      setEditPhone(false);
      console.log("User data updated:", userUpdated);
    } catch (error) {
      console.error(error);
      toast("Error updating user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Common style for field containers (similar to the refer link container)
  const fieldContainerClass =
    "border border-slate-500 rounded-full flex items-center px-3 py-2";
  // Common style for inline Edit/Save buttons matching the refer link button style
  const inlineButtonClass =
    "border border-[#049ABC] rounded-full px-4 py-1 text-sm ml-2";

  return (
    <>
      <section className="bg-black rounded-2xl py-8 px-10 max-md:px-1 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden">
        <h1 className="text-2xl font-semibold">Account:</h1>

        <div className="w-full flex max-sm:flex-col justify-between items-center">
          <p>Public Profile Settings</p>
          <div className="flex gap-2 max-sm:flex-col items-center">
            <button className="px-6 text-sm py-1 bg-blue-600 rounded-full hover:bg-opacity-70 duration-150">
              Public
            </button>
            <button className="px-6 py-1 rounded-full border border-[#CD7F32] text-sm">
              Anonymous
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Username */}
          <div className="flex flex-col gap-2">
            <p>Username</p>
            <div className={fieldContainerClass}>
              {editUsername ? (
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-transparent text-white text-sm outline-none"
                />
              ) : (
                <div className="w-full text-sm text-white">{username}</div>
              )}
              <button
                className={inlineButtonClass}
                onClick={() => {
                  if (editUsername && username !== initialUsername) {
                    toast("Username updated locally. Click update to save changes.");
                  }
                  setEditUsername(!editUsername);
                }}
              >
                {editUsername ? "Save" : "Edit"}
              </button>
            </div>
          </div>

          {/* First Name */}
          <div className="flex flex-col gap-2">
            <p>First Name</p>
            <div className={fieldContainerClass}>
              {editFirstName ? (
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-transparent text-white text-sm outline-none"
                />
              ) : (
                <div className="w-full text-sm text-white">{firstName}</div>
              )}
              <button
                className={inlineButtonClass}
                onClick={() => {
                  if (editFirstName && firstName !== initialFirstName) {
                    toast("First name updated locally. Click update to save changes.");
                  }
                  setEditFirstName(!editFirstName);
                }}
              >
                {editFirstName ? "Save" : "Edit"}
              </button>
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <p>Last Name</p>
            <div className={fieldContainerClass}>
              {editLastName ? (
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-transparent text-white text-sm outline-none"
                />
              ) : (
                <div className="w-full text-sm text-white">{lastName}</div>
              )}
              <button
                className={inlineButtonClass}
                onClick={() => {
                  if (editLastName && lastName !== initialLastName) {
                    toast("Last name updated locally. Click update to save changes.");
                  }
                  setEditLastName(!editLastName);
                }}
              >
                {editLastName ? "Save" : "Edit"}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <p>Phone</p>
            <div className={fieldContainerClass}>
              {editPhone ? (
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-white text-sm outline-none"
                />
              ) : (
                <div className="w-full text-sm text-white">{phone}</div>
              )}
              <button
                className={inlineButtonClass}
                onClick={() => {
                  if (editPhone && phone !== initialPhone) {
                    toast("Phone updated locally. Click update to save changes.");
                  }
                  setEditPhone(!editPhone);
                }}
              >
                {editPhone ? "Save" : "Edit"}
              </button>
            </div>
          </div>

          {/* Refer Link */}
          <div className="flex flex-col gap-2">
            <p>Refer Link:</p>
            <div className="border border-slate-500 rounded-full flex justify-between items-center px-3 py-2">
              <span className="text-sm truncate">{`/register?refer=${userId}`}</span>
              <button
                className="border border-[#049ABC] rounded-full px-4 py-1 text-sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register?refer=${userId}`
                  );
                  toast("Referral link copied!");
                }}
              >
                Copy
              </button>
            </div>
          </div>

          {/* Update Button */}
          {isModified && (
            <button
              className="border border-[#049ABC] rounded-full px-4 py-1 text-sm mt-4"
              disabled={loading}
              onClick={handleUpdate}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          )}
        </div>
      </section>
      <Toaster />
    </>
  );
}

export default Account;
