import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Subscribe from ".././connection/Email.tsx"
const testimonials = [
  { name: "Mohamed Saber", title: "Review", text: "Amazing product! High quality and great experience." },
  { name: "Ahmed Ali", title: "Review", text: "The sound quality is unbelievable. Highly recommended!" },
  { name: "Sara Mostafa", title: "Review", text: "Battery life is insane. I use it all day without charging." },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
  <div className="relative w-full min-h-[180vh]">
    <div 
    className="sticky top-0 h-screen w-full z-0">
      <div className="bg-amber-500/20 z-10 absolute inset-0 
      flex items-center justify-center">
        <h2 
        dir="rtl"
        className="text-2xl text-gray-800 font-bold md:text-4xl">
          اوقف ضوضاء العالم بيدك !
        </h2>
      </div>
      <img
      src="/image.avif"
      alt=""
      className="w-full h-full object-cover"
      />
    </div>
    <div id="Reviews" 
    className="absolute z-20 top-0 left-0 right-0 min-h-[60vh]
    bg-gray-100">
      <div className=" overflow-hidden mt-20 w-full max-w-7xl text-center relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => (
         <div key={i} className="flex-shrink-0 w-full p-8 text-[#777]">
            <div className="border w-fit m-auto p-6 rounded-xl border-gray-500">
            <div className="text-xl mb-4">{t.title}</div>
            <p className="text-lg mb-4">{t.text}</p>
            <h3 className="font-semibold">{t.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-2xl text-gray-700 gap-2 -top-4 relative">
        {testimonials.map((_, i) => (
          <button
          key={i}
          className={`w-3 h-3 rounded-full ${index === i ? "text-gray-500" : "text-gray-800"}`}
          >*</button>
        ))}
      </div>
      <button onClick={prev} 
      className="absolute left-1 cursor-pointer text-gray-600
       top-1/4 bg-gray-500/20 p-2 hover:text-blue-600 transition
      rounded-lg ">
        <ArrowLeft />
      </button>
      <button onClick={next} 
      className="absolute right-1 top-1/4 bg-gray-500/20 p-2 hover:text-blue-600 transition
       p-2 rounded-lg cursor-pointer">
        <ArrowRight />
      </button>
    </div>
    </div>
    <div className="absolute left-0 bottom-0 z-20 right-0">
      <Subscribe />
    </div>
</div>
</>
  );
}
 