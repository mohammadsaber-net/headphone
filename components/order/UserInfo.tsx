import { type ReactNode, useState } from "react"
import { useTranslation } from "react-i18next"

type props={
    setError:(value:ReactNode)=>void
}
export default function UserInfo({setError}:props) {
  const {t}=useTranslation()
    const [data,setData]=useState({
        email:null,
        name:null,
        phone:null,
        address:null,
    })
    const handleData=()=>{
        if(data.address&&data.email&&data.phone&&data.name){
            setError(<>{t("buy.buy11")} {data.name}<br/> {t("buy.buy12")}</>)
        }else{
           setError("Please Complete Your Data") 
        }
    }
  return (
    <div>
      <div className='mb-2'>
        <input
        onChange={(e)=>setData({...data,email:e.target.value as any})}
        type="email" 
        placeholder={t("buy.buy6")}
        className='w-full p-2 border hover:outline-none border-gray-200 bg-gray-500 text-white'/>
      </div>
      <div className='mb-2'>
        <input 
        onChange={(e)=>setData({...data,name:e.target.value as any})}
        type="text" 
        placeholder={t("buy.buy7")}
        className='w-full p-2 border hover:outline-none border-gray-200 bg-gray-500 text-white'/>
      </div>
      <div className='mb-2'>
        <input 
        onChange={(e)=>setData({...data,phone:e.target.value as any})}
        type="number" 
        placeholder={t("buy.buy8")}
        className='w-full p-2 border hover:outline-none border-gray-200 bg-gray-500 text-white'/>
      </div>
      <div className='mb-2'>
        <input 
        onChange={(e)=>setData({...data,address:e.target.value as any})}
        type="text" 
        placeholder={t("buy.buy9")}
        className='w-full p-2 border hover:outline-none border-gray-200 bg-gray-500 text-white'/>
      </div>
      <button
      type="button"
      onClick={handleData}
      className="w-full hover:underline py-2 block rounded
        text-center bg-gray-900 mb-2 cursor-pointer"
      >
        {t("buy.buy10")}
      </button>
    </div>
  )
}
