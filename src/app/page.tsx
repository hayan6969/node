import { Video } from "lucide-react"
import Decentralization from "./components/Decentralization"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroPage from "./components/HeroPage"
import Revolution from "./components/Revolution"

function page() {
  return (
    <>
<div className="w-screen overflow-x-hidden">
    <Header/>

    <div className="w-screen h-[90vh]  bg-[#080808] relative" >
    <div className="w-full h-full top-0 left-0 overflow-hidden">
      <video src="https://cdn.pixabay.com/video/2023/03/05/153249-804933410_large.mp4" muted autoPlay loop={false} className="w-full" ></video>
      </div>
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
        
        </div>
    <HeroPage/>
    <Decentralization/>
    <Revolution/>
    {/* <CardCarousel/> */}
    <div className="w-screen px-20 max-md:px-10 max-sm:px-4 bg-[#080808]"><Footer/></div>
</div>
    </>
  )
}

export default page 