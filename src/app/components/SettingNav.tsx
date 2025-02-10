"use client"
import React, { useState, useEffect } from 'react';
import { SETTING_ACCOUNT_LINKS, SETTING_SECURITY_LINKS } from '../constant';
import Link from 'next/link';
import { MdLogout } from "react-icons/md";
import { logOut } from '@/lib/appwrite/userApi'; // Import the logOut function

function SettingNav() {
  const [isMounted, setIsMounted] = useState(false); // To track whether it's mounted on the client-side

  useEffect(() => {
    // Ensures this is only run on the client-side (after mounting)
    setIsMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut(); // Call the logOut function from userApi
    } catch (error) {
      console.error("Logout failed:", error);
      // You could also handle the error, show a message, or alert the user if needed
    }
  };

  // Only render the component content after it's mounted on the client
  if (!isMounted) {
    return null; // Return null during server-side rendering to prevent errors
  }

  return (
    <nav className=' bg-black rounded-2xl  p-6 h-full w-60 flex flex-col text-white overflow-y-scroll relative overflow-x-hidden scrollHidden'>
      <h1 className='text-3xl font-bold'>Settings</h1>
       <h3 className='text-2xl font-semibold pt-2 text-[#CD7F32]'>Account</h3>
      <div className='flex flex-col gap-1 px-3 py-2 text-sm'>
        {SETTING_ACCOUNT_LINKS.map(link => <Link href={link.link} key={link.title}>{link.title}</Link>)}
      </div>
       <h3 className='text-2xl font-semibold text-[#CD7F32] pb-2'>Security</h3>
      <div className='flex flex-col gap-1 pl-10 py-4 text-sm  border-y border-[#CD7F32] w-60 -translate-x-8'>
        {SETTING_SECURITY_LINKS.map(link => <Link href={link.link} key={link.title}>{link.title}</Link>)}
      </div>
      <h3 className='text-2xl font-semibold text-[#CD7F32] mt-4'>Support</h3>
      <div className='flex flex-col gap-1 px-3 text-sm'>
        <Link href='/settings'>Contact Support</Link>
      </div>
      <button 
        onClick={handleLogout} 
        className='mt-8 flex gap-2 items-center cursor-pointer'>
        <MdLogout className='text-xl' />
        Logout
      </button>
    </nav>
  );
}

export default SettingNav;
