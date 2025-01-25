import Decentralization from "./components/Decentralization"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroPage from "./components/HeroPage"
import Revolution from "./components/Revolution"
import CardCarousel from "./components/ui/CardCarouse"

function page() {
  return (
    <>

    <Header/>
    {/* <div className=" h-[70vh] md:h-[90vh] md:pt-10 bg-blue-200 relative " >
      <div className="absolute h-full w-full z-0 ">
<div className="bg-red-[500] w-full h-full" >
video will come here
</div>
</div>
<div className="z-10 relative  text-white  flex  items-center justify-center ">
<div className="flex gap-10 mt-10">
<button className="primary_bg_color px-5 py-2 rounded-lg ">
          Login
          </button>
        <button className="primary_bg_color px-5 py-2 rounded-lg ">
        Sign up
        </button>
        </div>
        </div>
        
        </div> */}
    <HeroPage/>
    <Decentralization/>
    <Revolution/>
    {/* <CardCarousel/> */}
    <div className="w-screen px-20 bg-[#080808]"><Footer/></div>
    </>
  )
}

export default page 