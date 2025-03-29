"use client";

import { useEffect, useState } from "react";
import SettingNav from "../components/SettingNav";
import Header from "../components/Header";
import { getCurrentUser } from "@/lib/appwrite/userApi";

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        if (!user) {
          window.location.href = "/login";
          return;
        }
      } catch (error) {
        console.error("Error checking user login status:", error);
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <div className="w-screen h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-[#080808] p-10 md:p-20 md:pb-10 max-sm:p-2 max-sm:gap-4 overflow-hidden flex gap-12">
        <SettingNav />
        {children}
      </div>
    </>
  );
}
