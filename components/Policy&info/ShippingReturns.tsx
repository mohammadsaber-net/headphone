import { useTranslation } from 'react-i18next';
import Header from '../navbar/Header.tsx';
export default function ShippingReturns() {
  const {t}=useTranslation()
  return (
    <section className="bg-gray-100">
      <div className='text-gray-800 mx-auto w-[90%]'>
        <Header />
      </div>
      <div className=" mx-auto py-12 h-[calc(100vh-90px)] px-4 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-4">{t("returns.return1")}</h2>
      <p className="text-gray-600 leading-relaxed">
       {t("returns.return2")}
        <br />
       {t("returns.return3")}
        <br />
        {t("returns.return4")}
        </p>
      </div>
    </section>
  );
}
