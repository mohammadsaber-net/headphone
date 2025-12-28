export default function Addvertise() {
  return (
    <div className='bg-[rgb(227,203,170)] text-white py-28 px-8 mx-auto
    flex gap-10 flex-col md:flex-row items-center
    '>
      <img src="/add.avif" alt="" />
      <div>
        <h2 className='text-xl sm:text-2xl md:text-4xl'>
        Music Like You've
        Never Heard Before
      </h2>
      <p className='my-8'>I'm a paragraph. Click here to add your own text and edit me
        . It’s easy. Just click “Edit Text”
         or double click me to add your own content.
        </p>
        <button 
        className='cursor-pointer text-white border-1 border-white 
        rounded px-6 py-3 transition rounded hover:bg-white hover:text-gray-600'>
            Order Now
        </button>
      </div>
    </div>
  )
}
