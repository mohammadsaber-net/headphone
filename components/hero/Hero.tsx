import { useTranslation } from 'react-i18next'
import Header from '../navbar/Header.tsx'
import { Link } from 'react-router-dom'
export default function Hero() {
  const {t}=useTranslation()
  return (
    <div 
      id='Home'
       className='md:h-[100vh] h-[70vh] relative'>
        <img
        className='absolute -z-10 w-full h-full top-0'
        src="/backgroundHero.avif" alt="" />
      <div className='w-[90%] m-auto'>
        <div className='text-white'>
          <Header />
        </div>
        <div className='mt-28 flex justify-center md:justify-end text-white'>
          <div className='w-fit'>
            <p>Soundbeam ERD - 3083</p>
          <h1 className='text-3xl my-8 sm:text-4xl md:text-5xl lg:text-7xl'>
            {t("hero.hero11")}<br/>{t("hero.hero12")}
          </h1>
          <Link 
          to={"/order"}
            className='cursor-pointer text-white border-1 border-white 
            rounded px-6 py-3 transition rounded hover:bg-white hover:text-gray-600'>
                {t("hero.hero2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
