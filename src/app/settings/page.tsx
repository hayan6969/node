import React from 'react'
import Header from '../components/Header'
import SettingNav from '../components/SettingNav'

function page() {
  return (
    <>
    <Header/>
    <div className='w-screen h-screen bg-[#080808] p-10 md:p-20 md:pb-10 overflow-hidden'>
      <SettingNav/>
    </div>
    </>
  )
}

export default page
