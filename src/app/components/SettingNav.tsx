import React from 'react'
import { SETTING_ACCOUNT_LINKS, SETTING_SECURITY_LINKS } from '../constant'
import Link from 'next/link'
import { MdLogout } from "react-icons/md";
function SettingNav() {
  return (
    <nav className=' bg-black rounded-2xl  p-6 h-full w-60 flex flex-col text-white overflow-y-scroll relative overflow-x-hidden snap-n'>
      <h1 className='text-3xl font-bold'>Settings</h1>
       <h3 className='text-2xl font-semibold pt-2 text-[#CD7F32]'>Account</h3>
      <div className='flex flex-col gap-1 px-3 py-2 text-sm'>
        {SETTING_ACCOUNT_LINKS.map(link=><Link href={link.link}>{link.title}</Link>)}
      </div>
       <h3 className='text-2xl font-semibold text-[#CD7F32] pb-2'>Security</h3>
      <div className='flex flex-col gap-1 pl-10 py-4 text-sm  border-y border-[#CD7F32] w-60 -translate-x-8'>
        {SETTING_SECURITY_LINKS.map(link=><Link href={link.link}>{link.title}</Link>)}
      </div>
      <h3 className='text-2xl font-semibold text-[#CD7F32] mt-4'>Support</h3>
      <div className='flex flex-col gap-1 px-3 text-sm'>
        <Link href='/settings'>Contact Support</Link>
      </div>
      <Link href="/" className='mt-8 flex gap-2 items-center'><MdLogout className='text-xl' />Logout</Link>
    </nav>
  )
}

export default SettingNav
