import Header from '../navbar/Header.tsx'
export default function Hero() {
  return (
    <div 
    id='Home'
    className='h-screen relative'>
        <img
        className='absolute -z-10 w-full h-full top-0'
        src="../../public/backgroundHero.avif" alt="" />
      <div className='w-[90%] m-auto'>
        <div className='text-white'>
          <Header />
        </div>
        <div className='mt-28 flex justify-center md:justify-end text-white'>
          <div className='w-fit'>
            <p>Soundbeam ERD - 3083</p>
          <h1 className='text-3xl my-8 sm:text-5xl md:text-7xl lg:text-9xl'>
            Reinventing <br />
            Sound Experience
          </h1>
          <button 
            className='cursor-pointer text-white border-1 border-white 
            rounded px-6 py-3 transition rounded hover:bg-white hover:text-gray-600'>
                Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
