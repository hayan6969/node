"use client";
import React, { useState, useEffect } from 'react';
import { updateUserData, getCurrentUser } from "@/lib/appwrite/userApi";

function Account() {
  // State for managing edit mode
  const [editUsername, setEditUsername] = useState(false);
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  // State for holding values
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');

  // State for initial values
  const [initialUsername, setInitialUsername] = useState('');
  const [initialFirstName, setInitialFirstName] = useState('');
  const [initialLastName, setInitialLastName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [initialPhone, setInitialPhone] = useState('');

  // Loading state
  const [loading, setLoading] = useState(false);

  // Fetch current user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          // Assuming userData has the necessary fields
          setUsername(userData.username || '');
          setFirstName(userData.first_name || '');
          setLastName(userData.last_name || '');
          // setEmail(userData.email || '');
          setPhone(userData.phone || '');
          setUserId(userData.$id || '');

          // Set initial values for comparison
          setInitialUsername(userData.username || '');
          setInitialFirstName(userData.first_name || '');
          setInitialLastName(userData.last_name || '');
          // setInitialEmail(userData.email || '');
          setInitialPhone(userData.phone || '');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Optionally remove login token if fetching fails
      }
    };

    fetchUserData();
  }, []);

  // Function to handle the Update
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedData = {
        username,
        first_name: firstName,
        last_name: lastName,
        phone,
      };

      // Assuming updateUserData is an async function
      const userUpdated = await updateUserData(updatedData);
      // Optionally show a success message or refresh data
      console.log('User data updated:', userUpdated);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Check if any fields have been modified
  const isModified =
    username !== initialUsername ||
    firstName !== initialFirstName ||
    lastName !== initialLastName ||
    email !== initialEmail ||
    phone !== initialPhone;

  return (
    <section className="bg-black rounded-2xl py-8 px-10 max-md:px-1 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden">
      <h1 className="text-2xl font-semibold">Account:</h1>
      <div className="w-full flex max-sm:flex-col justify-between items-center">
        <p>Public Profile Settings</p>
        <div className="flex gap-2 max-sm:flex-col items-center">
          <button className="px-6 text-sm py-1 bg-blue-600 rounded-full hover:bg-opacity-70 duration-150">
            Public
          </button>
          <button className="py-1 px-6 rounded-full border border-[#CD7F32] text-sm">
            Anonymus
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Username */}
        <div className="flex flex-col gap-2">
          <p>Username</p>
          <div className="border border-slate-500 rounded-full flex">
            {editUsername ? (
              <input
                type="text"
                className="w-full h-full p-3 text-sm bg-transparent text-white border-none rounded-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <div className="w-full h-full p-3 text-sm">{username}</div>
            )}
            <button
              className="border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1"
              onClick={() => setEditUsername(!editUsername)}
            >
              {editUsername ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* First Name */}
        <div className="flex flex-col gap-2">
          <p>First Name</p>
          <div className="border border-slate-500 rounded-full flex">
            {editFirstName ? (
              <input
                type="text"
                className="w-full h-full p-3 text-sm bg-transparent text-white border-none rounded-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            ) : (
              <div className="w-full h-full p-3 text-sm">{firstName}</div>
            )}
            <button
              className="border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1"
              onClick={() => setEditFirstName(!editFirstName)}
            >
              {editFirstName ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <p>Last Name</p>
          <div className="border border-slate-500 rounded-full flex">
            {editLastName ? (
              <input
                type="text"
                className="w-full h-full p-3 text-sm bg-transparent text-white border-none rounded-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            ) : (
              <div className="w-full h-full p-3 text-sm">{lastName}</div>
            )}
            <button
              className="border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1"
              onClick={() => setEditLastName(!editLastName)}
            >
              {editLastName ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <p>Phone</p>
          <div className="border border-slate-500 rounded-full flex">
            {editPhone ? (
              <input
                type="tel"
                className="w-full h-full p-3 text-sm bg-transparent text-white border-none rounded-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <div className="w-full h-full p-3 text-sm">{phone}</div>
            )}
            <button
              className="border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1"
              onClick={() => setEditPhone(!editPhone)}
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
                alert("Referral link copied!");
              }}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Update Button */}
        <button
          className="border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1"
          disabled={!isModified || loading}
          onClick={handleUpdate}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </section>
  );
}

// Check if any fields have been modified
const isModified =
  // Since email isn't editable, it's compared with initialEmail (which remains unchanged)
  // If you uncomment email fields, include its comparison as well.
  (Account.prototype.username !== Account.prototype.initialUsername) ||
  (Account.prototype.firstName !== Account.prototype.initialFirstName) ||
  (Account.prototype.lastName !== Account.prototype.initialLastName) ||
  (Account.prototype.phone !== Account.prototype.initialPhone);

export default Account;
