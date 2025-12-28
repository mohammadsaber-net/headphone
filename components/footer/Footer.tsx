import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='pt-12 bg-zinc-200 text-[#777]'>
      <div className='flex justify-between mx-auto w-[90%] md:w-[80%] max-w-7xl
       items-center flex-wrap'>
        <div className='flex flex-col gap-2 text-center'>
            <a href='#Home'>HOME</a>
            <a href='#Benefits'>BENEFITS</a>
            <a href='#Reviews'>REVIEWS</a>
        </div>
        <div className='flex flex-col gap-2 text-center'>
            <Link to='/shipping-returns'>SHIPPING & RETURNS</Link>
            <Link to='/store-policy'>STORE POLICY</Link>
            <Link to='/faq'>FAQ</Link>
        </div>
        <div className='flex flex-col gap-2 text-center'>
            <a href='#Home'>TELEGRAM</a>
            <a href='#Benefits'>WHATSAPP</a>
            <a href='#Reviews'>GITHUB</a>
        </div>
      </div>
      <div className='bg-zinc-300'>
        <div className='text-center text-sm mt-4 py-4'>
            &copy; 2025 Soundbeam. All rights reserved.
        </div>
      </div>
    </div>
  )
}
