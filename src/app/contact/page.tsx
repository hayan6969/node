'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm,SubmitHandler } from 'react-hook-form'

function page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
    <Header/>
    <section className='w-screen min-h-screen flex flex-col max-sm:px-4 gap-6 items-center text-white bg-[#080808] relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-[#CD7F32] before:rounded-full before:bg-opacity-20 before:-bottom-20 before:-left-20 p-20 md:p-10 overflow-hidden'>
        <h1 className='heading mt-20'>Get in touch</h1>
        <div className='flex gap-8 max-md:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
                <h4 className='text-2xl font-semibold'>Contact Us</h4>
                <p>Whether you have questions about our services, need support, or want to share your feedback, our dedicated team is here to assist you every step of the way.</p>
            </div>
            <div className='flex flex-col gap-4 w-full text-sm'>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="name">Name*</label>
                    <input
                type="email"
                className="border border-slate-500 rounded-2xl w-full px-3 py-2 bg-transparent outline-none "
                {...register("name", { required: true })}
              />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="name">Email*</label>
                    <input
                type="email"
                className="border border-slate-500 rounded-2xl w-full px-3 py-2 bg-transparent outline-none "
                {...register("email", { required: true })}
              />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="walletaddress">Wallet address {'('}if account holder{')'}</label>
                    <input
                type="email"
                className="border border-slate-500 rounded-2xl w-full px-3 py-2 bg-transparent outline-none "
                {...register("wallet address", { required: true })}
              />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="topic">Topic*</label>
                    <input
                type="email"
                className="border border-slate-500 rounded-2xl w-full px-3 py-2 bg-transparent outline-none "
                {...register("topic", { required: true })}
              />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="message">Message*</label>
                    <input
                type="email"
                className="border border-slate-500 rounded-2xl w-full px-3 py-8 bg-transparent outline-none "
                {...register("message", { required: true })}
              />
                </div>
                <div>
                <input type='submit' value='Submit' className='px-4 p-1 rounded-full border border-[#049ABC] cursor-pointer' />
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default page
