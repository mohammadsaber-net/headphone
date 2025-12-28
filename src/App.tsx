import './App.css'
import Home from "../components/home/Home.tsx"
import FAQ from "../components/Policy&info/FAQ.tsx"
import ShippingReturns from "../components/Policy&info/ShippingReturns.tsx"
import StorePolicy from "../components/Policy&info/StorePolicy.tsx"
import {Route,Routes } from 'react-router-dom'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/store-policy" element={<StorePolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
  )
}

export default App
