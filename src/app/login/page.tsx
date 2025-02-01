"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

function page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [inputVisible, setInputVisible] = useState(false);
  const onSubmit = (data: any) => console.log(data);
  const [continueDisable, setContinueDisable] = useState(true);

  return (
    <div className="p-10 md:p-20 bg-black min-h-[100vh] text-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold">Login</h1>
      <div className="w-full h-full p-6 rounded-xl bg-gradient-to-r from-[#2B160A] to-[#1A2145] flex flex-col items-center border border-[#004AAD] relative">
        <div className="text-xl font-semibold">logo</div>
        <div className="flex flex-col text-center pt-12">
          <h3 className="text-5xl font-bold">Welcome</h3>
          <p className="heading pt-2">
            {" "}
            Login to continue to{" "}
            <span className="text-[#cf9f45]"> ASS I AM</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col py-10 gap-6 w-full px-44">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-lg">
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
                  onChange={(e) => setContinueDisable(!e.target.checked)}
                />
                <p className="para">I agree to the Terms and Conditions</p>
              </div>
            </div>
            <div className="w-full flex justify-center">
            <input
            type="submit"
            value='Continue'
            className={`${continueDisable?"opacity-70":"opacity-100"} bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center text-center py-2 cursor-pointer mx-6 mt-12`}
            disabled={continueDisable}
            />
            </div>
          </div>
        </form>
        <p className="para text-center">
          Create new Account <br />
          <Link href="/register" className="text-blue-700 cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
export default page;
