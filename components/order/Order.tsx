import {type ReactNode, useState } from "react"
import Header from "../navbar/Header"
import Footer from '../footer/Footer'
import Subscribe from '../connection/Email'
import { useTranslation } from "react-i18next"
import UserInfo from "./UserInfo"
export default function Order() {
    const {t}=useTranslation()
    const images=["/JuiceGo_Image02.webp","/add.avif","/whitehead.avif","/blackhead.avif"]
    const [image,setImage]=useState<any>(images[0])
    const [color,setColor]=useState<any>(null)
    const [show,setShow]=useState<boolean>(false)
    const [error,setError]=useState<ReactNode>()
    const handlePay=()=>{
        if(!color){
            setError("Please Choose Your Color")
        }else{
            setShow(true)
        }
    }
  return (
    <div className='text-white max-w-7xl bg-gray-700'>
        <div className="w-[90%] mx-auto ">

        <Header />
      <h2 className='text-lg text-center mb-8 mt-6 sm:text-xl md:text-2xl font-bold'>
        {t("buy.buy1")}
      </h2>
      <div className='flex pb-8 flex-col md:flex-row gap-4 items-center justify-center'>
        <div>
            <div className="w-80 flex items-center justify-center h-96 overflow-hidden border border-white">
                <img src={image} className="w-full h-full object-cover" alt="image" />
            </div>
            <div className="flex gap-2 items-center mt-4 justify-center">
                {images.map((items:any)=>{
                    return(
                        <img 
                        key={items} 
                        onClick={()=>setImage(items)}
                        src={items} alt={items} 
                        className="cursor-pointer w-12 flex-wrap h-12"/>
                    )
                })}
            </div>
        </div>
        <div>
            <h3 className="md:text-xl font-bold mb-4">
                Soundbeam ERD - 3083
            </h3>
            <div>$299.00</div>
            <div className="my-3">
                {t("buy.buy2")} <span>{color}</span>
            </div>
            <div className="flex items-center mb-4 gap-2">
                <span
                onClick={()=>setColor("black")} 
                className="size-6 bg-black border border-white block cursor-pointer"></span>
                <span
                onClick={()=>setColor("white")} 
                className="size-6 bg-white border border-white block cursor-pointer"></span>
                <span
                onClick={()=>setColor("brown")} 
                className="size-6 bg-amber-400 border border-white block cursor-pointer"></span>
            </div>
            <button 
            onClick={handlePay}
            className="w-full hover:underline py-2 block rounded
            text-center bg-amber-700 mb-6 cursor-pointer">
                {t("buy.buy3")}
            </button>
            {show&&<UserInfo setError={setError}/>}
            <p className={`mb-4 text-white text-center`}>{error}</p>
            <div className="pt-2 border-t border-gray-400">
                <h4>{t("buy.buy4")}</h4>
                <p >
                    {t("buy.buy5")}
                </p>
            </div>
        </div>
      </div>
    </div>
    <Subscribe />
    <Footer />
    </div>
  )
}
