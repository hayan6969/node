"use client"
import { useState } from "react"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
const [isLogin,setIsLogin]=useState(true)
  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="hidden fixed  w-full md:flex justify-around items-center bg-black text-white p-5 z-[30]">
        <div>LINK.</div>
        <div className="flex gap-10">
        {NAVLINKS_ITEMS.map(link=> <Link 
        href={link.link} 
        key={link.title}
        >
        {link.title}
        </Link>)}
        </div>
        <div className="flex gap-6 items-center">
        <BsTelegram className="text-2xl cursor-pointer"/>
        <BsDiscord className="text-2xl cursor-pointer"/>
        {
          isLogin?
          <div className="border-none outline-none pt-1">
            <Sheet>
  <SheetTrigger><FaRegUserCircle className="cursor-pointer border-none outline-none scale-150 bg-black" /></SheetTrigger>
  <SheetContent className="absolute bg-[#262626] text-white  before:absolute before:w-full border-none before:left-1/2 before:-translate-x-1/2 px-0 before:h-24 before:rounded-b-3xl before:bg-[#004AAD] before:top-0 pt-32">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

          <DropdownMenu>
          <DropdownMenuTrigger className="outline border-none" ><FaRegUserCircle className="cursor-pointer border-none outline-none scale-150 bg-black" /></DropdownMenuTrigger>
          <DropdownMenuContent className="absolute bg-[#262626] text-white -top-12 -left-44 w-80 before:absolute before:w-full border-none before:left-1/2 before:-translate-x-1/2 px-0 before:h-24 before:rounded-b-3xl before:bg-[#004AAD] before:top-0 pt-32">
          <FaRegUser className="text-5xl cursor-pointer absolute top-16 left-6 text-white bg-[#004AAD] rounded-full border-4 border-white" />
          <Link href='/settings'><GoGear className="absolute top-2 right-2 text-2xl text-white cursor-pointer" /></Link>
            <DropdownMenuLabel className="pl-4">Username:</DropdownMenuLabel>
            <DropdownMenuLabel className="pl-4">Email:</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#CD7F32]" />
            <DropdownMenuItem className="pl-4"><FaRegUser />Profile</DropdownMenuItem>
            <DropdownMenuItem className="pl-4"><LuHistory />Order History</DropdownMenuItem>
            <DropdownMenuItem className="pl-4"><MdOutlineInventory />Inventory</DropdownMenuItem>
            <DropdownMenuItem className="pl-4"><GrNodes />Node</DropdownMenuItem>
            <DropdownMenuItem className="pl-4"><TbSocial />Social</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#CD7F32]" />
            <DropdownMenuItem className="py-2 pl-4" ><MdLogout />Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </div> : <div className="flex gap-10">
            <Link href="/login" className="px-6 py-1 bg-black text-white border border-[#049ABC] hover:bg-white hover:text-[#080D1B] hover:border-[#080D1B] rounded-full font-medium text-sm cursor-pointer">Login</Link>
            <Link href="/register" className="px-6 py-1 bg-black text-white border border-[#049ABC] hover:bg-white hover:text-[#080D1B] hover:border-[#080D1B] rounded-full font-medium text-sm cursor-pointer">Register</Link>
          </div>
        }
        </div>
         
  

      </nav>
      {/* Mobile Sidebar */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="md:hidden bg-red-500 p-5  top-5 fixed left-5 z-50 rounded-3xl text-white font-bold uppercase"
      >
        {openSidebar ? 'Close' : 'Menu'}
      </button>

      <div
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-[20] fixed top-0 left-0 h-full w-3/4 primary_bg_color text-white p-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-6 mt-20">
        {NAVLINKS_ITEMS.map(link=> <Link 
        href={link.link} 
        key={link.title}
        >
        {link.title}
        </Link>)}
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
