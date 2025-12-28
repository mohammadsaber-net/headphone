import { Headphones } from 'lucide-react'
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import Mobile from './mobile.tsx'
export default function Header() {
  return (
    <>
    <Mobile />
    <header 
    className='hidden md:flex justify-between pt-3 border-b border-white pb-10 items-center'>
      <div 
      className='flex gap-10 items-center'>
        <div 
        className='flex items-center gap-2 font-bold text-xl sm:text-2xl
         md:text-3xl'>
            <Headphones /> Soundbeam
        </div>
        <nav className='flex gap-4'>
            <a href='/#Home' className='cursor-pointer'>Home</a>
            <a href='/#Benefits' className='cursor-pointer'>Benefits</a>
            <a href='/#Reviews' className='cursor-pointer'>Reviews</a>
        </nav>
      </div>
      <div>
        <div className='flex gap-6 items-center'>
            <button 
            className='cursor-pointer text-gray-900 bg-amber-600 rounded px-2 py-1'>
                Order Now
            </button>
            <div className='flex gap-3 text-xl'>
              <a 
              href="https://t.me/@moh123ph" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaTelegram className='cursor-pointer transition hover:bg-white rounded-full hover:text-blue-500'/>
              </a>
               <a 
                href="https://wa.me/+201023966702" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaWhatsapp className='cursor-pointer transition hover:bg-white rounded-full hover:text-green-600'/>
                </a>
                 <a 
                href="https://www.linkedin.com/in/mohammad-saber-447510353/"
                target="_blank" 
                rel="noopener noreferrer">
                <FaLinkedin className='cursor-pointer transition hover:bg-white rounded-full hover:text-blue-600'/>
                </a>
            </div>
        </div>
      </div>
    </header>
  </>
  )
}
