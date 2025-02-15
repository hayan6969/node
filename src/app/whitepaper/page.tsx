import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function page() {
  return (
    <>
    <Header/>
    <section className='w-screen min-h-screen flex flex-col gap-8 items-center text-center justify-center'>
      <h1 className='text-7xl font-semibold tracking-wider'>Whitepaper</h1>
      <i className='text-2xl font-medium'>Launching Soon</i>
    </section>
    <Footer/>
    </>
  )
}

export default page
