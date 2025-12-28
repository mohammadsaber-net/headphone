import Header from '../navbar/Header.tsx';
export default function StorePolicy() {
  return (
    <section className="bg-gray-100">
      <div className='text-gray-800 mx-auto w-[90%]'>
              <Header />
            </div>
            <div className=" mx-auto py-12 h-[calc(100vh-90px)] px-4 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-4">سياسة المتجر</h2>
      <p className="text-gray-600 leading-relaxed">
        نحن نلتزم بتقديم منتجات أصلية بجودة عالية.
        <br />
        جميع الطلبات يتم تأكيدها قبل الشحن.
        <br />
        يتم الحفاظ على خصوصية بيانات العملاء وعدم مشاركتها مع أي طرف ثالث.
      </p>
      </div>
    </section>
  );
}
