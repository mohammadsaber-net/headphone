import { BatteryCharging, Bluetooth, Headphones, Radio } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const {t}=useTranslation()
  return (
    <div id="Benefits" className="relative h-[130vh] pt-10 md:pt-0 text-[#ddd] bg-black/70">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img src="/JuiceGo_Image02.webp"
       className='absolute inset-0 w-full h-full object-cover z-0' alt="" />
       <div className="w-[90%] m-auto">
       <div className="flex relative h-screen flex-col md:flex-row justify-center z-20 gap-6 md:gap-4">
        <div className="w-fit self-center"> 
          <Radio />
          <h2 className="text-xl my-2 md-text-2xl">{t("features.feature1")}
          </h2>
          <p className="m-w-80">
            {t("features.feature12")}
          </p>
        </div>
        <div className="w-fit self-end"> 
          <Bluetooth />
          <h2 className="text-xl my-2 md-text-2xl">{t("features.feature2")}
          </h2>
          <p>
            {t("features.feature22")}
          </p>
        </div>
        <div className="self-center"> 
          <BatteryCharging />
          <h2 className="text-xl my-2 md-text-2xl">
            {t("features.feature3")}
          </h2>
          <p>
            {t("features.feature32")}
          </p>
        </div>
        <div className="self-end"> 
          <Headphones />
          <h2 className="text-xl my-2 md-text-2xl">{t("features.feature4")}
          </h2>
          <p>
            {t("features.feature42")}
          </p>
        </div>
       </div>
       </div>
    </div>
  )
}
