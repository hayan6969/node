"use client";
import React, { useState, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { changePassword, getCurrentUser } from "@/lib/appwrite/userApi"; // Assuming getCurrentUser is available
import { enableAuth } from "@/lib/appwrite/authApi";

function Security() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [authType, setAuthType] = useState(null); // Store current 2FA type: "sms", "email", or "not"

  useEffect(() => {
    // Fetch the current user and their 2FA status on component mount
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        // console.log('user:', user);
        
        setAuthType(user.twoFa || null); // Set the 2FA status (sms, email, or not)
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      alert("Please enter both old and new passwords.");
      return;
    }
    await changePassword(newPassword, oldPassword);
  };

  const handleEnableAuth = async (type) => {
    if (authType === type) return; // Prevent re-enabling the same auth type
    setAuthType(type); // Update the auth type to the selected one
    await enableAuth(type); // Call enableAuth function from userApi
  };

  return (
    <section className="bg-black rounded-2xl py-8 px-10 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden">
      <h1 className="text-2xl font-semibold">Account Security:</h1>

      {/* Old Password */}
      <div className="flex flex-col gap-2 w-2/3">
        <p>Old Password</p>
        <div className="border border-slate-500 rounded-full flex">
          <div className="w-full h-full p-3 text-sm flex flex-col gap-2">
            <input
              type="password"
              placeholder="Enter Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
          </div>
        </div>
      </div>

      {/* New Password */}
      <div className="flex flex-col gap-2 w-2/3">
        <p>New Password</p>
        <div className="border border-slate-500 rounded-full flex">
          <div className="w-full h-full p-3 text-sm flex flex-col gap-2">
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
          </div>
        </div>
      </div>

      {/* Change Password Button */}
      <button
        className="border border-[#CD7F32] rounded-full px-6 py-2 flex justify-center items-center text-sm w-2/3 mt-2"
        onClick={handleChangePassword}
      >
        Update Password
      </button>

      {/* SMS Authentication */}
      <div className="w-full flex justify-between items-center">
        <p className="group duration-200 flex gap-2 items-center relative">
          SMS Authentication <IoInformationCircleOutline className="cursor-pointer" />
        </p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "sms" ? "bg-blue-600 text-white" : "border border-[#CD7F32]"
            }`}
            disabled={authType === "sms"}
            onClick={() => handleEnableAuth("sms")}
          >
            Enable
          </button>
        </div>
      </div>

      {/* Email Authentication */}
      <div className="w-full flex justify-between items-center">
        <p>Email Authentication</p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "email" ? "bg-blue-600 text-white" : "border border-[#CD7F32]"
            }`}
            disabled={authType === "email"}
            onClick={() => handleEnableAuth("email")}
          >
            Enable
          </button>
        </div>
      </div>

      {/* Not Authentication */}
      <div className="w-full flex justify-between items-center">
        <p>Disable Two Factor Authentication</p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "not" ? "bg-blue-600 text-white" : "border border-[#CD7F32]"
            }`}
            disabled={authType === "not"}
            onClick={() => handleEnableAuth("not")}
          >
            Disable
          </button>
        </div>
      </div>
    </section>
  );
}

export default Security;
