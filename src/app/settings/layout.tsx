export default function settingLayout({
    children,
    AccountSetting,
}:{
    children:React.ReactNode
    AccountSetting:React.ReactNode
}){
    return(
        <>
        <div>{children}</div>
        <div>{AccountSetting}</div>
        </>
    )
}