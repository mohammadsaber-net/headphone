import { useTranslation } from 'react-i18next';
import Header from '../navbar/Header.tsx';
export default function FAQ() {
  const {t}=useTranslation()
  return (
    <section className="bg-gray-100">
      <div className='text-gray-800 mx-auto w-[90%]'>
              <Header />
            </div>
            <div className=" mx-auto py-12 h-[calc(100vh-90px)] px-4 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-6">{t("faq.faq1")}</h2>
      <div className="space-y-4 text-gray-600">
        <p>
          <strong>{t("faq.faq2")}</strong>
          <br />
         {t("faq.faq3")}
        </p>

        <p>
          <strong>{t("faq.faq4")}</strong>
          <br />
         {t("faq.faq5")}
        </p>

        <p>
          <strong>{t("faq.faq6")}</strong>
          <br />
         {t("faq.faq7")}
        </p>
      </div>
      </div>
    </section>
  );
}
