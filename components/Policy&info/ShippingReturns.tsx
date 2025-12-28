import Header from '../navbar/Header.tsx';
export default function ShippingReturns() {
  return (
    <section className="bg-gray-100">
      <div className='text-gray-800 mx-auto w-[90%]'>
        <Header />
      </div>
      <div className=" mx-auto py-12 h-[calc(100vh-90px)] px-4 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-4">الشحن والاسترجاع</h2>
      <p className="text-gray-600 leading-relaxed">
        يتم شحن الطلبات خلال 24 إلى 48 ساعة من تأكيد الطلب.
        <br />
        مدة التوصيل من 2 إلى 5 أيام عمل داخل مصر.
        <br />
        في حالة وجود أي عيب في المنتج، يمكنك طلب الاسترجاع خلال 14 يومًا من تاريخ الاستلام.
      </p>
      </div>
    </section>
  );
}
