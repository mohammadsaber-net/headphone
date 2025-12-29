import './App.css'
import Home from "../components/home/Home.tsx"
import FAQ from "../components/Policy&info/FAQ.tsx"
import ShippingReturns from "../components/Policy&info/ShippingReturns.tsx"
import StorePolicy from "../components/Policy&info/StorePolicy.tsx"
import Order from "../components/order/Order.tsx"
import {Route,Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function App() {
  const {i18n}=useTranslation()
  const handleLang =()=>{
    i18n.language==="ar"?i18n.changeLanguage("en"):i18n.changeLanguage("ar")
  }
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className='relative'>
      <button 
      className='fixed top-28 left-10 bg-gray-500 w-10 h-10 rounded-full
      z-[100000000] cursor-pointer text-white'
      onClick={handleLang}>
          {i18n.language === "en"?"AR":"EN"}
        </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/store-policy" element={<StorePolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
