export default function Subscribe() {
  return (
    <div className='py-20 text-white bg-gray-800'>
        <div className='flex gap-8 flex-col md:flex-row max-w-7xl w-[90%]
        md:w-[80%] m-auto items-center justify-center'>
            <h2 className='text-white font-bold text-xl'>
                Stay Connected
            </h2>
            <form>
                <label htmlFor="Email">
                    Email *
                </label>
                <input type="email" id='Email'
                className='block mt-2 mb-6 p-2 focus:border-white border border-amber-500  w-full rounded' />
                <div className='flex justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id='subscribe' />
                        <label htmlFor="subscribe"
                        className='text-white text-sm'>
                            Subscribe To NewsLetter
                        </label>
                    </div>
                    <button type='button' 
                    className='px-6 cursor-pointer py-2 transition bg-amber-600 hover:bg-white
                    rounded hover:text-gray-500'>Subscribe</button>
                </div>
            </form>
        </div>
    </div>
  )
}
