"use client";
import { useEffect, useState } from "react";
import Decentralization from "./components/Decentralization";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import Revolution from "./components/Revolution";
import { getCurrentUser, logOut } from "@/lib/appwrite/userApi";
import { PiGearSixFill } from "react-icons/pi";
import GradientText from "@/components/GradientText/GradientText";
import { FaReact } from "react-icons/fa6";
interface User {
  first_name: string;
  email: string;
  // Add other properties if needed.
}

function page() {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setIsLogin(true);
          // Using a type assertion to tell TypeScript that currentUser matches User.
          setUser(currentUser as unknown as User);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLogin(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);
  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <Header />

        <div className="w-screen h-auto md:h-[90vh] bg-[#080808] relative">
          <div className="w-full h-full top-0 left-0 overflow-hidden">
            <video
              src="https://cdn.pixabay.com/video/2023/03/05/153249-804933410_large.mp4"
              muted
              autoPlay
              loop={false}
              className="w-full"
            ></video>
          </div>
          {!isLogin ? (
            <div className="w-full md:pt-10 absolute top-0 left-0">
              <div className="z-10 relative text-white flex items-center justify-center w-full">
                <div className="flex gap-10 mt-10">
                  <button className="primary_bg_color px-5 py-2 rounded-lg ">
                    Login
                  </button>
                  <button className="primary_bg_color px-5 py-2 rounded-lg ">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="group relative p-6 rounded-2xl border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">
      <h2 className="text-lg font-semibold text-white">Hover Me!</h2>
      <p className="text-gray-300">Watch the border glow.</p>
    </div>
        <HeroPage />
        <Decentralization />
        <Revolution />
        <div className="w-screen px-20 max-md:px-10 max-sm:px-4 bg-[#080808]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default page;
