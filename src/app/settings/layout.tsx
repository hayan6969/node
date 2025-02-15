import SettingNav from "../components/SettingNav"
import Header from "../components/Header"
export default function settingLayout({
    children,
   
}:{
    children:React.ReactNode
    AccountSetting:React.ReactNode
}){
    return(
        <>
        <Header/>
        <div className='w-screen h-screen bg-[#080808] p-10 md:p-20 md:pb-10 max-sm:p-2 max-sm:gap-4 overflow-hidden flex gap-12'>
        <SettingNav/>
        {children}
        </div>
        
        </>
    )
}