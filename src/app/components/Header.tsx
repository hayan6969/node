"use client"
import { useState, useEffect } from "react"
import Link from 'next/link';
import { NAVLINKS_ITEMS } from "../constant";
import { BsTelegram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { GrNodes } from "react-icons/gr";
import { TbSocial } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getCurrentUser, logOut } from "@/lib/appwrite/userApi"; // Import the getCurrentUser function

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Initially set to false
  const [user, setUser] = useState(null); // To store user information
  const [loading, setLoading] = useState(true); // Add loading state to handle delay

  useEffect(() => {
    // Check if the user is logged in using the getCurrentUser API
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser(); // Get current user
        if (currentUser) {
          setIsLogin(true);
          setUser(currentUser); // Set the user details
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLogin(false);
      } finally {
        setLoading(false); // Set loading to false once the user data has been fetched
      }
    };

    checkUser(); // Call the function on component mount
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="hidden fixed w-full md:flex justify-around items-center bg-black text-white p-5 z-[30]">
        <div>LINK.</div>
        <div className="flex gap-10">
          {NAVLINKS_ITEMS.map(link => (
            <Link href={link.link} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <BsTelegram className="text-2xl cursor-pointer" />
          <BsDiscord className="text-2xl cursor-pointer" />
          {loading ? (
            // Display loading spinner or placeholder content while fetching user data
            <div className="text-sm text-white">Loading...</div>
          ) : isLogin ? (
            <div className="border-none outline-none pt-1">
              <Sheet>
                {/* USER ICON */}
                <SheetTrigger>
                  <FaRegUserCircle className="cursor-pointer border-none outline-none scale-150 bg-black" />
                </SheetTrigger>

                <SheetContent className="bg-[#262626] text-white before:absolute before:w-full border-none before:left-1/2 before:-translate-x-1/2 px-0 before:h-24 before:rounded-b-3xl before:bg-[#004AAD] before:top-0 pt-32">
                  <FaRegUser className="text-5xl cursor-pointer absolute top-16 left-6 text-white bg-[#004AAD] rounded-full border-4 border-white" />
                  <Link href='/settings'>
                    <GoGear className="absolute top-3 right-3 text-2xl text-white cursor-pointer bg-[#004AAD]" />
                  </Link>
                  <SheetHeader>
                    <SheetDescription className="text-white pl-4">Username: {user?.first_name}</SheetDescription>
                    <SheetDescription className="text-white pl-4">Email: {user?.email}</SheetDescription>
                    <div className="w-full px-4 py-6 border-y-2 border-[#cf9f45] gap-4 flex flex-col">
                      <SheetDescription className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150">
                        <FaRegUser />Profile
                      </SheetDescription>
                      <SheetDescription onClick={() => window.location.href = "/orders-history"} className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150">
                        <LuHistory />Order History
                      </SheetDescription>
                      <SheetDescription className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150">
                        <MdOutlineInventory />Inventory
                      </SheetDescription>
                      <SheetDescription className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150">
                        <GrNodes />Node
                      </SheetDescription>
                      <SheetDescription className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150">
                        <TbSocial />Social
                      </SheetDescription>
                    </div>
                    <SheetDescription onClick={logOut} className="text-white flex gap-2 items-center cursor-pointer hover:text-[#cf9f45] duration-150 pl-4 pt-4">
                      <MdLogout /> Logout
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex gap-10">
              <Link
                href="/login"
                className="px-6 py-1 bg-black text-white border border-[#049ABC] hover:bg-white hover:text-[#080D1B] hover:border-[#080D1B] rounded-full font-medium text-sm cursor-pointer"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-1 bg-black text-white border border-[#049ABC] hover:bg-white hover:text-[#080D1B] hover:border-[#080D1B] rounded-full font-medium text-sm cursor-pointer"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="md:hidden bg-red-500 p-5 top-5 fixed left-5 z-50 rounded-3xl text-white font-bold uppercase"
      >
        {openSidebar ? 'Close' : 'Menu'}
      </button>

      <div
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-[20] fixed top-0 left-0 h-full w-3/4 primary_bg_color text-white p-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-6 mt-20">
          {NAVLINKS_ITEMS.map(link => (
            <Link href={link.link} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <p className="uppercase font-bold hover:text-red-500">Whitepaper</p>
          <p className="uppercase font-bold hover:text-red-500">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
