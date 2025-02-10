"use client";
import React, { useState, useEffect } from 'react';
import { getCurrentUser, updateUserData } from '@/lib/appwrite/userApi'; 

function Address() {
  // State for managing edit mode
  const [editAddress, setEditAddress] = useState(false);

  // State for holding address fields
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Function to split address into fields
  const splitAddress = (address) => {
    if (address) {
      const parts = address.split('+');
      setStreet(parts[0] || '');
      setHouseNumber(parts[1] || '');
      setZip(parts[2] || '');
      setCity(parts[3] || '');
      setCountry(parts[4] || '');
    }
  };

  // Fetch current user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser();
        if (user && user.address) {
          splitAddress(user.address);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Handle Save Address
  const handleSave = async () => {
    const fullAddress = `${street}+${houseNumber}+${zip}+${city}+${country}`;
    try {
      await updateUserData({ address: fullAddress });
      setEditAddress(false);
      alert("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <section className='bg-black rounded-2xl py-8 px-10 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden'>
      <h1 className='text-2xl font-semibold'>Address:</h1>

      <div className='flex flex-col gap-2'>
        {/* Address Fields */}
        {[
          { label: "Street", value: street, setter: setStreet },
          { label: "House Number", value: houseNumber, setter: setHouseNumber },
          { label: "ZIP", value: zip, setter: setZip },
          { label: "City", value: city, setter: setCity },
          { label: "Country", value: country, setter: setCountry },
        ].map(({ label, value, setter }) => (
          <div key={label} className='flex flex-col gap-2'>
            <p>{label}</p>
            <div className='border border-slate-500 rounded-full flex'>
              {editAddress ? (
                <input
                  type="text"
                  className='w-full h-full p-3 text-sm bg-transparent text-white border-none rounded-full'
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                />
              ) : (
                <div className='w-full h-full p-3 text-sm'>{value}</div>
              )}
              <button
                className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'
                onClick={() => setEditAddress(!editAddress)}
              >
                {editAddress ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        ))}

        {/* Update Address Button */}
        {editAddress && (
          <div className='mt-4'>
            <button
              className='bg-[#CD7F32] text-white rounded-full py-2 px-6'
              onClick={handleSave}
            >
              Update Address
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Address;
