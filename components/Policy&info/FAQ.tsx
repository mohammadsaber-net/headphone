import Header from '../navbar/Header.tsx';
export default function FAQ() {
  return (
    <section className="bg-gray-100">
      <div className='text-gray-800 mx-auto w-[90%]'>
              <Header />
            </div>
            <div className=" mx-auto py-12 h-[calc(100vh-90px)] px-4 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة</h2>

      <div className="space-y-4 text-gray-600">
        <p>
          <strong>هل السماعة أصلية؟</strong>
          <br />
          نعم، السماعة أصلية 100% ومضمونة.
        </p>

        <p>
          <strong>هل تدعم السماعة العزل؟</strong>
          <br />
          نعم، تدعم عزل الضوضاء لتجربة صوت أفضل.
        </p>

        <p>
          <strong>كم مدة البطارية؟</strong>
          <br />
          تصل مدة البطارية إلى 30 ساعة من الاستخدام المتواصل.
        </p>
      </div>
      </div>
    </section>
  );
}
