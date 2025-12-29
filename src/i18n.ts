import i18n from "i18next"
import { initReactI18next } from "react-i18next"
i18n
.use(initReactI18next)
.init({
    resources:{
        en:{
            translation:{
                header:{
                    logo:"Soundbeam",
                    head1:"Home",
                    head2:"Benefits",
                    head3:"Reviews",
                    head4:"Order Now"
                },
                hero:{
                    hero11:"Reinventing",
                    hero12:"Sound Experience",
                    hero2:"Order Now"
                },
                features:{
                    feature1:"High Quality Sound",
                    feature12:"Experience crystal-clear audio with deep bass and balanced tones, giving you an immersive sound experience whether you're listening to music or taking calls.",
                    feature2:"Easy Wireless Listening",
                    feature22:"Enjoy seamless wireless connectivity that lets you move freely without cables, delivering stable sound wherever you go.",
                    feature3:"Longer Battery Life",
                    feature32:"Listen longer with an extended battery life that keeps your headphones powered throughout the day without frequent charging.",
                    feature4:"Enhanced Sound Experience",
                    feature42:"Advanced sound technology delivers rich, dynamic audio that brings every beat and detail to life."
                },
                addver:{
                    addver1:"Music Like You've Never Heard Before",
                    addver2:"Premium sound quality that delivers powerful bass and exceptional clarity in every moment.",
                    addver3:"Order Now",
                },
                reviews:{
                    review:"Silence the Noise of the World"
                },
                email:{
                    email1:"Stay Connected",
                    email2:"Email ",
                    email3:"Subscribe To NewsLetter",
                    email4:"Subscribe",
                },
                footer:{
                    foot1:"TELEGRAM",
                    foot2:"WHATSAPP",
                    foot3:"GITHUB",
                    foot4:"SHIPPING & RETURNS",
                    foot5:"STORE POLICY",
                    foot6:"FAQ",
                    foot7:"HOME",
                    foot8:"BENEFITS",
                    foot9:"REVIEWS",
                    foot10:"All rights reserved",
                },
                returns: {
                    return1: "Shipping & Returns",
                    return2: "Orders are shipped within 24 to 48 hours after order confirmation.",
                    return3: "Delivery takes 2 to 5 business days within Egypt.",
                    return4: "If the product has any defect, you can request a return within 14 days from the date of receipt."
                },
                faq: {
                    faq1: "Frequently Asked Questions",
                    faq2: "Is the headphone original?",
                    faq3: "Yes, the headphone is 100% original and guaranteed.",
                    faq4: "Does the headphone support noise cancellation?",
                    faq5: "Yes, it supports noise isolation for a better sound experience.",
                    faq6: "What is the battery life?",
                    faq7: "The battery lasts up to 30 hours of continuous use."
                },
                policy: {
                    policy1: "Store Policy",
                    policy2: "We are committed to providing original products of high quality.",
                    policy3: "All orders are confirmed before shipping.",
                    policy4: "Customer data privacy is maintained and not shared with any third party."
                }

            }
        },
        ar:{
            translation:{
                header:{
                    logo:"Soundbeam",
                    head1:"الرئيسية",
                    head2:"المميزات",
                    head3:"أراء العملاء",
                    head4:"اطلب الآن"
                },
                hero:{
                    hero12:"تجربة الصوت",
                    hero11:"نُعيد تعريف",
                    hero2:"اطلب الآن"
                },
                features:{
                    feature1:"صوت عالي الجودة",
                    feature12:"استمتع بصوت نقي وتفاصيل دقيقة مع Bass قوي وتوازن مثالي، لتجربة استماع غامرة سواء للموسيقى أو المكالمات.",
                    feature2:"استماع لاسلكي بسهولة",
                    feature22:"اتصال لاسلكي سريع وثابت يمنحك حرية الحركة بدون أسلاك، مع صوت مستقر في أي مكان.",
                    feature3:"عمر بطارية أطول",
                    feature32:"بطارية تدوم لفترات طويلة لتستمتع بالموسيقى طوال اليوم دون الحاجة للشحن المتكرر.",
                    feature4:"تجربة صوت محسّنة",
                    feature42:"تقنيات صوت متطورة تمنحك أداءً غنيًا ومليئًا بالتفاصيل لتشعر بكل نغمة بوضوح."
                },
                addver:{
                    addver1:"موسيقى لم تسمعها من قبل",
                    addver2:"استمتع بتجربة صوت غامرة بتفاصيل نقية وBass عميق، سواء كنت تستمع للموسيقى، تشاهد الأفلام، أو تجري مكالماتك اليومية—صوت أوضح، إحساس أقوى، ومتعة بلا حدود.",
                    addver3:"اطلب الآن",
                },
                reviews:{
                    review:"أوقف ضوضاء العالم… بلمسة واحدة"
                },
                email: {
                    email1: "ابقَ على تواصل",
                    email2: "البريد الإلكتروني",
                    email3: "اشترك في النشرة الإخبارية",
                    email4: "اشترك",
                },
                footer: {
                    foot1: "تيليجرام",
                    foot2: "واتساب",
                    foot3: "جيت هاب",
                    foot4: "الشحن والاسترجاع",
                    foot5: "سياسة المتجر",
                    foot6: "الأسئلة الشائعة",
                    foot7: "الرئيسية",
                    foot8: "المميزات",
                    foot9: "آراء العملاء",
                    foot10: "جميع الحقوق محفوظة",
                },
                returns:{
                    return1:"الشحن والاسترجاع",
                    return2:" يتم شحن الطلبات خلال 24 إلى 48 ساعة من تأكيد الطلب.",
                    return3:" مدة التوصيل من 2 إلى 5 أيام عمل داخل مصر.",
                    return4:" في حالة وجود أي عيب في المنتج، يمكنك طلب الاسترجاع خلال 14 يومًا من تاريخ الاستلام."
                },
                faq:{
                    faq1:"الأسئلة الشائعة",
                    faq2:"هل السماعة أصلية؟",
                    faq3:" نعم، السماعة أصلية 100% ومضمونة.",
                    faq4:"هل تدعم السماعة العزل؟",
                    faq5:" نعم، تدعم عزل الضوضاء لتجربة صوت أفضل.",
                    faq6:"كم مدة البطارية؟",
                    faq7:" تصل مدة البطارية إلى 30 ساعة من الاستخدام المتواصل.",
                },
                policy:{
                    policy1:"سياسة المتجر",
                    policy2:" نحن نلتزم بتقديم منتجات أصلية بجودة عالية.",
                    policy3:" جميع الطلبات يتم تأكيدها قبل الشحن.",
                    policy4:" يتم الحفاظ على خصوصية بيانات العملاء وعدم مشاركتها مع أي طرف ثالث."
                }
            }
        }
    },
    lng:"ar",
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    }
})
export default i18n