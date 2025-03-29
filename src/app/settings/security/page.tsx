"use client";
import React, { useState, useEffect } from "react";
import {
  IoInformationCircleOutline,
  IoEye,
  IoEyeOff,
} from "react-icons/io5";
import { toast } from "sonner";
import { changePassword, getCurrentUser } from "@/lib/appwrite/userApi"; // Assuming getCurrentUser is available
import { enableAuth } from "@/lib/appwrite/authApi";

function Security() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [authType, setAuthType] = useState<"sms" | "email" | "not" | null>(null); // Store current 2FA type

  useEffect(() => {
    // Fetch the current user and their 2FA status on component mount
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setAuthType(user.twoFa || null); // Set the 2FA status (sms, email, or not)
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      toast("Please enter both old and new passwords.");
      return;
    }
    try {
      await changePassword(newPassword, oldPassword);
      toast("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      toast("Error changing password. Please try again.");
    }
  };

  const handleEnableAuth = async (type: "sms" | "email" | "not") => {
    if (authType === type) return; // Prevent re-enabling the same auth type
    try {
      setAuthType(type); // Update the auth type to the selected one
      await enableAuth(type); // Call enableAuth function from userApi
      if (type === "not") {
        toast("Two-factor authentication disabled.");
      } else {
        toast(`${type.toUpperCase()} authentication enabled.`);
      }
    } catch (error) {
      console.error("Error updating authentication:", error);
      toast("Error updating authentication. Please try again.");
    }
  };

  return (
    <section className="bg-black rounded-2xl py-8 px-10 max-sm:px-1 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden">
      <h1 className="text-2xl font-semibold">Account Security:</h1>

      {/* Old Password */}
      <div className="flex flex-col gap-2 w-2/3 max-sm:w-full">
        <p>Old Password</p>
        <div className="border border-slate-500 rounded-full flex items-center">
          <div className="w-full h-full p-3 text-sm flex items-center">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="text-white ml-2"
            >
              {showOldPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* New Password */}
      <div className="flex flex-col gap-2 w-2/3">
        <p>New Password</p>
        <div className="border border-slate-500 rounded-full flex items-center">
          <div className="w-full h-full p-3 text-sm flex items-center">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="text-white ml-2"
            >
              {showNewPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
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
          SMS Authentication{" "}
          <IoInformationCircleOutline className="cursor-pointer" />
        </p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "sms"
                ? "bg-blue-600 text-white"
                : "border border-[#CD7F32]"
            }`}
            disabled={authType === "sms"}
            onClick={() => handleEnableAuth("sms")}
          >
            {authType === "sms" ? "Enabled" : "Enable"}
          </button>
        </div>
      </div>

      {/* Email Authentication */}
      <div className="w-full flex justify-between items-center">
        <p>Email Authentication</p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "email"
                ? "bg-blue-600 text-white"
                : "border border-[#CD7F32]"
            }`}
            disabled={authType === "email"}
            onClick={() => handleEnableAuth("email")}
          >
            {authType === "email" ? "Enabled" : "Enable"}
          </button>
        </div>
      </div>

      {/* Disable Two-Factor Authentication */}
      <div className="w-full flex justify-between items-center">
        <p>Disable Two Factor Authentication</p>
        <div className="flex gap-2 items-center">
          <button
            className={`px-6 text-sm py-1 rounded-full duration-150 ${
              authType === "not"
                ? "bg-blue-600 text-white"
                : "border border-[#CD7F32]"
            }`}
            disabled={authType === "not"}
            onClick={() => handleEnableAuth("not")}
          >
            {authType === "not" ? "Disabled" : "Disable"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Security;
