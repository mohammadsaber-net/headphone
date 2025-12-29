import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const {t}=useTranslation()
  return (
    <div className='pt-12 bg-zinc-200 text-[#777]'>
      <div className='flex justify-between mx-auto w-[90%] md:w-[80%] max-w-7xl
       items-center flex-wrap'>
        <div className='flex flex-col gap-2 text-center'>
            <Link to='/shipping-returns'>{t("footer.foot4")}</Link>
            <Link to='/store-policy'>{t("footer.foot5")}</Link>
            <Link to='/faq'>{t("footer.foot6")}</Link>
        </div>
        <div className='flex flex-col gap-2 text-center'>
            <a href='#Home'>{t("footer.foot7")}</a>
            <a href='#Benefits'>{t("footer.foot8")}</a>
            <a href='#Reviews'>{t("footer.foot9")}</a>
        </div>
        <div className='flex flex-col gap-2 text-center'>
            <a href='#Home'>{t("footer.foot1")}</a>
            <a href='#Benefits'>{t("footer.foot2")}</a>
            <a href='#Reviews'>{t("footer.foot3")}</a>
        </div>
      </div>
      <div className='bg-zinc-300'>
        <div className='text-center text-sm mt-4 py-4'>
            &copy; 2025 Soundbeam. {t("footer.foot10")}
        </div>
      </div>
    </div>
  )
}
