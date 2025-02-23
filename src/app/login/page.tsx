"use client";
import LoginWithGoogle from "@/components/ui/LoginWithGoogle";
import { 
  loginEmailAndPass, 
  sendEmailOTP, 
  LoginWithOTP, 
  isTwoFactorEnabled, 
  sendSmsOTP, 
  getCurrentUser
} from "@/lib/appwrite/userApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { toast, Toaster } from "sonner";

interface LoginFormInputs {
  email: string;
  password: string;
  otp?: string;
  checkBox: boolean;
}

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [inputVisible, setInputVisible] = useState(false);
  const [continueDisable, setContinueDisable] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error checking user session:", error);
      }
    };
    checkUser();
  }, []);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      const { email, password, otp } = data;
      const twoFa = await isTwoFactorEnabled(email);

      if (twoFa === "not") {
        await loginEmailAndPass(email, password);
        window.localStorage.setItem("isLoggedIn", "true");
        toast.success("Logged in successfully!");
        window.location.href = "/";
      } else if (twoFa === "email") {
        if (!showOtp) {
          const userIdRes = await sendEmailOTP(email);
          setUserId(userIdRes || "");
          setShowOtp(true);
          toast("OTP sent to your email.");
        } else {
          await LoginWithOTP(userId, otp!);
          window.localStorage.setItem("isLoggedIn", "true");
          toast.success("Logged in successfully!");
          window.location.href = "/";
        }
      } else if (twoFa === "sms") {
        if (!showOtp) {
          const userIdRes = await sendSmsOTP(email);
          setUserId(userIdRes || "");
          setShowOtp(true);
          toast("OTP sent to your phone.");
        } else {
          await LoginWithOTP(userId, otp!);
          window.localStorage.setItem("isLoggedIn", "true");
          toast.success("Logged in successfully!");
          window.location.href = "/";
        }
      }
    } catch (error: unknown) {
      let friendlyMessage = "An unexpected error occurred. Please try again.";
      if (error instanceof Error) {
        const lowerMsg = error.message.toLowerCase();
        if (lowerMsg.includes("invalid") || lowerMsg.includes("unauthorized")) {
          friendlyMessage = "Invalid email or password. Please try again.";
        } else if (lowerMsg.includes("otp")) {
          friendlyMessage = "The OTP is incorrect. Please check and try again.";
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
    <div className="p-10 md:p-20 bg-black min-h-[100vh] text-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold">Login</h1>
      <div className="w-full h-full p-6 rounded-xl bg-gradient-to-r from-[#2B160A] to-[#1A2145] flex flex-col items-center border border-[#004AAD] relative">
        <div className="text-xl font-semibold">logo</div>
        <div className="flex flex-col text-center pt-12">
          <h3 className="text-5xl font-bold">Welcome</h3>
          <p className="heading pt-2">
            Login to continue to <span className="text-[#cf9f45]"> ASS I AM</span>
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
                className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-lg">
                Password*
              </label>
              <div className="border border-slate-500 rounded-lg flex items-center">
                <input
                  type={inputVisible ? "text" : "password"}
                  className="w-full px-3 py-2 bg-transparent outline-none"
                  {...register("password", { required: true })}
                />
                <span
                  className="mx-4 text-xl cursor-pointer"
                  onClick={() => setInputVisible(!inputVisible)}
                >
                  {inputVisible ? <GoEye /> : <GoEyeClosed />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {showOtp && (
              <div className="flex flex-col gap-2">
                <label htmlFor="otp" className="font-medium text-lg">
                  OTP*
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="border border-slate-500 rounded-lg w-full px-3 py-2 bg-transparent outline-none"
                  {...register("otp", { required: true })}
                />
                {errors.otp && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            )}
            <div className="w-full flex gap-4 items-center py-2">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                {...register("checkBox", { required: true })}
                onChange={(e) => setContinueDisable(!e.target.checked)}
              />
              <p className="para">I agree to the Terms and Conditions</p>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className={`${
                  continueDisable ? "opacity-70" : "opacity-100"
                } bg-black text-white border border-[#049ABC] rounded-xl w-full flex justify-center items-center text-center py-2 cursor-pointer mx-6 mt-12`}
                disabled={continueDisable || loading}
              >
                {loading ? "Loading..." : showOtp ? "Log In" : "Continue"}
              </button>
            </div>
          </div>
        </form>
        <LoginWithGoogle register={false} />
        <p className="para text-center">
          Create a new account <br />
          <Link href="/register" className="text-blue-700 cursor-pointer">
            Register
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default Page;
