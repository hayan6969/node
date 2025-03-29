"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { registerWithEmailAndPass, getCurrentUser } from "@/lib/appwrite/userApi";
import { sendEmail } from "@/lib/appwrite/paymentFunctions";
import LoginWithGoogle from "@/components/ui/LoginWithGoogle";
import { toast, Toaster } from "sonner";

// Define a type for our registration form inputs
interface RegistrationFormInputs {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  checkBox: boolean;
}

function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormInputs>();
  const [inputVisible, setInputVisible] = useState(false);
  const [formToggle, setFormToggle] = useState(true);
  const [continueDisable, setContinueDisable] = useState(true);
  const [refer, setRefer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          window.location.href = "/";
          return;
        }
      } catch (error) {
        console.error("Error checking user login status:", error);
      }

      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        setRefer(urlParams.get("refer")); // This returns string or null
      }
    };

    checkUser();
  }, []);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
    setLoading(true);
    try {
      const { email, password, username, firstname, lastname } = data;
      await registerWithEmailAndPass({ email, password, username, firstname, lastname, refer });
      console.log("User registered successfully", data);

      toast.success("Registration successful!");


      await sendEmail(
        "Welcome to Our Platform!",
        `Hello ${firstname}, 🎉
        
Thank you for registering with us! We're excited to have you on board.

- Your registered email: ${email}

If you have any questions, feel free to reach out.

Best Regards,  
The Team`,
        `<h2 style="color: blue;">Welcome to Our Platform! 🎉</h2>
         <p>Hello <strong>${firstname}</strong>,</p>
         <p>Thank you for registering with us! We're excited to have you on board.</p>
         <p><strong>Your registered email:</strong> ${email}</p>
         <p>If you have any questions, feel free to reach out.</p>
         <p>Best Regards,<br/>The Team</p>`
      );

      window.location.href = "/";
    } catch (error: unknown) {
      console.error("Error registering user:", error);
      let friendlyMessage = "An unexpected error occurred. Please try again.";
      if (error instanceof Error) {
        const lowerMsg = error.message.toLowerCase();
        if (lowerMsg.includes("email")) {
          friendlyMessage = "There was an issue with your email. Please check and try again.";
        } else if (lowerMsg.includes("password")) {
          friendlyMessage = "The password provided is invalid. Please try a different one.";
        } else {
          friendlyMessage = error.message;
        }
      }
      toast.error(friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-24 md:px-44 max-sm:p-4 py-1 bg-black h-screen overflow-hidden text-white flex flex-col gap-1 items-center">
      <h1 className="text-4xl font-bold">Register</h1>
      <div className="w-full h-full p-4 py-2 max-sm:p-2 rounded-xl bg-gradient-to-r from-[#2B160A] to-[#1A2145] flex flex-col items-center border border-[#004AAD] relative">
        {!formToggle && (
          <div className="absolute top-10 left-10 text-2xl cursor-pointer" onClick={() => setFormToggle(true)}>
            <FaArrowLeftLong />
          </div>
        )}
        <div className="text-xl font-semibold">logo</div>
        <div>
          <h1>REFER: {refer}</h1>
        </div>
        <div className="flex flex-col text-center pt-2">
          <h3 className="text-4xl font-bold">Welcome</h3>
          <p className="text-xl font-medium pt-1">
            Register to continue to <span className="text-[#cf9f45]">ASS I AM</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {formToggle ? (
            <div className="flex flex-col py-2 gap-2 w-full px-44 max-lg:px-24 max-md:px-12 max-sm:px-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium text-base">Email*</label>
                <input
                  type="email"
                  placeholder="eg.xxxxx@gmail.com"
                  className="border border-slate-500 rounded-lg w-full px-2.5 py-1 bg-transparent outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-medium text-base">Password*</label>
                <div className="border border-slate-500 rounded-lg flex items-center">
                  <input
                    type={inputVisible ? "text" : "password"}
                    className="w-full px-2.5 py-1 bg-transparent outline-none"
                    {...register("password", { required: true })}
                  />
                  <span className="mx-4 text-xl cursor-pointer" onClick={() => setInputVisible(!inputVisible)}>
                    {inputVisible ? <GoEye /> : <GoEyeClosed />}
                  </span>
                </div>
              </div>
              <div className="w-full flex gap-2 items-center py-1">
                <input
                  type="checkbox"
                  className="w-3 h-3 cursor-pointer"
                  {...register("checkBox", { required: true })}
                  onChange={e => setContinueDisable(!e.target.checked)}
                />
                <p className="text-base font-medium">I agree to the Terms and Conditions</p>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  className={`${continueDisable ? "opacity-70" : "opacity-100"} bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center py-1 cursor-pointer mx-6 mt-2`}
                  onClick={() => setFormToggle(false)}
                  disabled={continueDisable}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col py-1 gap-1 w-full px-24 max-lg:px-24 max-md:px-12 max-sm:px-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="font-medium text-base">Username*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-2.5 py-1 bg-transparent outline-none"
                  {...register("username", { required: true })}
                />
                {errors.username && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstname" className="font-medium text-base">First Name*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-2.5 py-1 bg-transparent outline-none"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastname" className="font-medium text-base">Last Name*</label>
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg w-full px-2.5 py-1 bg-transparent outline-none"
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && <span className="text-red-500">This field is required</span>}
              </div>
              <input
                type="submit"
                value={loading ? "Signing up..." : "Sign Up"}
                className="bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center py-1 cursor-pointer mt-2"
              />
            </div>
          )}
        </form>
        <LoginWithGoogle register={true} />

        <p className="para text-center">
          Already have an account?{" "}

        <p className="text-base font-medium text-center">
          Already have an account? <br />

          <Link href="/login" className="text-blue-700 cursor-pointer">
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default Page;
