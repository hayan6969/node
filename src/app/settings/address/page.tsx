import React from 'react'

function Address() {
  return (
    <section className=' bg-black rounded-2xl py-8 px-10 h-full w-full flex flex-col gap-6 text-white overflow-y-scroll relative overflow-x-hidden scrollHidden'>
    <h1 className='text-2xl font-semibold'>Address:</h1>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-2'>
          <p>Street</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
          <p>House number</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
          <p>ZIP</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
          <p>City</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
          <p>Country</p>
          <div className='border border-slate-500 rounded-full flex'>
              <div className='w-full h-full p-3 text-sm'></div>
              <button className='border border-[#CD7F32] rounded-full h-full px-6 flex justify-center items-center text-sm py-1'>Edit</button>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Address
