import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Addvertise() {
  const {t}=useTranslation()
  return (
    <div className='bg-[rgb(227,203,170)] text-white py-28 px-8 mx-auto
    flex gap-10 flex-col md:flex-row items-center
    '>
      <div>
        <h2 className='text-xl sm:text-2xl md:text-4xl'>
        {t("addver.addver1")}
      </h2>
      <p className='my-8'>
        {t("addver.addver2")}
        </p>
        <Link 
        to={"/order"}
        className='cursor-pointer text-white border-1 border-white 
        rounded px-6 py-3 transition rounded hover:bg-white hover:text-gray-600'>
            {t("addver.addver3")}
        </Link>
      </div>
      <img src="/add.avif" alt="" />
    </div>
  )
}
