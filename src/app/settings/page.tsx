import React from 'react'
import Header from '../components/Header'
import SettingNav from '../components/SettingNav'
import AccountSection from '../components/AccountSection'
import AddressSection from '../components/AddressSection'
import AccountSetting from '../components/AccountSetting'

function page() {
  return (
    <>
    <Header/>
    <div className='w-screen h-screen bg-[#080808] p-10 md:p-20 md:pb-10 overflow-hidden flex gap-12'>
      <SettingNav/>
      {/* <AccountSection/> */}
      {/* <AddressSection/> */}
      <AccountSetting/>*
    </div>
    </>
  )
}

export default page
