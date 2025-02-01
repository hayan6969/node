import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";

function Security() {
  return (
    <section className=' bg-black rounded-2xl py-8 px-10 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden'>
    <h1 className='text-2xl font-semibold'>Account Security:</h1>
    <div className='flex flex-col gap-2 w-2/3'>
          <p>Password</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <p>Two Factor Authencation (2FA):</p>
            <button className='py-1 px-6 rounded-full border border-[#CD7F32] text-sm'>Edit</button>
      </div>
      <div className='w-full flex justify-between items-center pt-24'>
        <p className='group duration-200 flex gap-2 items-center relative'>SMS Authencation <IoInformationCircleOutline className='cursor-pointer' /> 
        <div className='absolute hidden group-hover:flex duration-200 group-hover:duration-200 flex-col gap-1 p-2 border border-[#004AAD] rounded-2xl text-[8px] w-60 left-full bottom-full translate-x-6'>
          <p>Enhance Your Account Security</p>
          <p><b>Enable:</b>When activated, SMS or email authentication will be required for logging in and verifying important account activities.</p>
          <p><b>Disable:</b>Authentication via SMS or email will not be requested for login or account actions.</p>
          <p>Take control of your security—activate SMS or email authentication for added protection.</p>
        </div>
        </p>
        <div className='flex gap-2 items-center'>
            <button className='px-6 text-sm py-1 bg-blue-600 rounded-full hover:bg-opacity-70 duration-150'>Enable</button>
            <button className='py-1 px-6 rounded-full border border-[#CD7F32] text-sm'>Disable</button>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <p>Email Authencation</p>
        <div className='flex gap-2 items-center'>
            <button className='px-6 text-sm py-1 bg-blue-600 rounded-full hover:bg-opacity-70 duration-150'>Enable</button>
            <button className='py-1 px-6 rounded-full border border-[#CD7F32] text-sm'>Disable</button>
        </div>
      </div>
    </section>
  )
}

export default Security
