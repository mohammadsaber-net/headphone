import { Headphones, MenuIcon, X } from 'lucide-react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom';
export default function Mobile() {
    const [showMenu,SetShowMenu]=useState(false);
    const Icon=showMenu?X:MenuIcon
    const {t}=useTranslation()
  return (
    <header 
    className='flex md:hidden justify-between relative pt-3 border-b border-white pb-10'>
        <div 
        className='flex items-center gap-2 font-bold text-xl sm:text-2xl
         md:text-3xl'>
            <Headphones /> Soundbeam
        </div>
        <div className='flex items-center gap-6'>
        <Link 
        to={"/order"}
        className='cursor-pointer text-gray-900 bg-amber-600 rounded px-2 py-1'>
            {t("header.head4")}
        </Link>
        <div 
        onClick={()=>SetShowMenu(!showMenu)}
        className='cursor-pointer'>
            <Icon />
        </div>
        </div>
        <div className={`absolute top-16 bg-gray-600 
            transition duration-500 rounded-xl transform p-4 left-0 w-full shadow-lg 
            ${!showMenu ? '-translate-y-[200%]' : '-translate-y-[0%]'}`}>
            <nav className='flex gap-3 flex-col'>
            <a href='/#Home' className='cursor-pointer'>{t("header.head1")}</a>
            <a href='/#Benefits' className='cursor-pointer'>{t("header.head2")}</a>
            <a href='/#Reviews' className='cursor-pointer'>{t("header.head3")}</a>
        </nav>
            <div className='flex gap-3 mt-8 justify-center text-3xl'>
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
     
    </header>
  )
}
