import React from 'react'

function AccountSection() {
  return (
    <section className=' bg-black rounded-2xl py-8 px-10  h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden'>
      <h1 className='text-2xl font-semibold'>Account:</h1>
      <div className='w-full flex justify-between items-center'>
        <p>Public Profile Settings</p>
        <div className='flex gap-2 items-center'>
            <button className='px-6 text-sm py-1 bg-blue-600 rounded-full hover:bg-opacity-70 duration-150'>Public</button>
            <button className='py-1 px-6 rounded-full border border-[#CD7F32] text-sm'>Anonymus</button>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
            <p>Username</p>
            <div className='border border-slate-500 rounded-full flex'>
                <div className='w-full h-full p-3 text-sm'></div>
                <button className='border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p>Firstname</p>
            <div className='border border-slate-500 rounded-full flex'>
                <div className='w-full h-full p-3 text-sm'></div>
                <button className='border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p>Lastname</p>
            <div className='border border-slate-500 rounded-full flex'>
                <div className='w-full h-full p-3 text-sm'></div>
                <button className='border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p>Email</p>
            <div className='border border-slate-500 rounded-full flex'>
                <div className='w-full h-full p-3 text-sm'></div>
                <button className='border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p>Phone</p>
            <div className='border border-slate-500 rounded-full flex'>
                <div className='w-full h-full p-3 text-sm'></div>
                <button className='border border-[#049ABC] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AccountSection
