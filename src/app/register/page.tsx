"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
function page() {
  const { register, handleSubmit, formState:errors } = useForm();
  const [inputVisible, setInputVisible] = useState(false);
  const [formToggle, setFormToggle] = useState(true);
  const [continueDisable,setContinueDisable]=useState(true)
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-10 md:p-20 bg-black min-h-[100vh] text-white flex flex-col gap-8 items-center">
      <h1 className="text-6xl font-bold">Register</h1>
      <div className="w-full h-full p-6 rounded-xl bg-gradient-to-r from-[#2B160A] to-[#1A2145] flex flex-col items-center border border-[#004AAD] relative">
        {formToggle ? (
          ""
        ) : (
          <div
            className="absolute top-10 left-10 text-2xl cursor-pointer"
            onClick={() => setFormToggle(!formToggle)}
          >
            <FaArrowLeftLong />
          </div>
        )}
        <div className="text-xl font-semibold">logo</div>
        <div className="flex flex-col text-center pt-12">
          <h3 className="text-5xl font-bold">Welcome</h3>
          <p className="heading pt-2"> Register to continue to <span className="text-[#cf9f45]"> ASS I AM</span></p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {formToggle ? (
            <div className="flex flex-col py-10 gap-6 w-full px-44">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-lg" 
                >
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="eg.xxxxx@gmail.com"
                  className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none "
                  {...register("email", { required: true })}
                  />
                  {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-lg">
                  Password*
                </label>
                <div className="border border-slate-500 rounded-lg flex items-center">
                  <input
                    type={inputVisible ? "text" : "password"}
                    className=" w-full px-3 py-2 bg-transparent outline-none"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="mx-4 text-xl cursor-pointer"
                    onClick={() => setInputVisible(!inputVisible)}
                  >
                    {inputVisible ? <GoEye /> : <GoEyeClosed />}
                  </span>
                </div>
                <div className="w-full flex gap-4 items-center py-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    {...register("checkBox", { required: true })}
onChange={e=>setContinueDisable(!e.target.checked)}
                  />
                  <p className="para">I agree to the Terms and Conditions</p>
                </div>
              </div>
              <div className="w-full flex justify-center">

              <button
                className={`${continueDisable?"opacity-70":"opacity-100"} bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center text-center py-2 cursor-pointer mx-6 mt-12`}
                onClick={(e) => setFormToggle(!formToggle)}
                disabled={continueDisable}
                >
                Continue
              </button>
                </div>
            </div>
          ) : (
            <div className="flex flex-col py-10 gap-6 w-full px-44">
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Username*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none "
                  {...register("username", { required: true })}
                  name="username"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstname">Firstname*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none "
                  {...register("firstname", { required: true })}
                  name="firstname"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastname">Lastname*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none "
                  {...register("lastname", { required: true })}
                  name="lastname"
                />
              </div>
              
              <input
                type="submit"
                value="Sign Up"
                className="bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center py-2 cursor-pointer mt-12"
              />
            </div>
          )}
        </form>

        <p className="para text-center">
          Already have an account <br />
          <Link href="/login" className="text-blue-700 cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
