import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold">اكتشف قصة الشعر التي تناسبك</h1>
        <p className="mt-4 text-gray-600">BarberStyle AI يساعدك على اختيار القصة المناسبة لوجهك ونوع شعرك وذوقك.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/quiz" className="btn-primary">اكتشف قصتك الآن</Link>
          <Link href="/library" className="btn-ghost">تصفح قصات الشعر</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">مجموعتنا المميّزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-lg flex items-center gap-4">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" className="w-24 h-24 object-cover rounded" />
            <div>
              <div className="font-semibold">Pompadour</div>
              <div className="text-sm text-gray-500">مظهر فاخر وكلاسيكي</div>
            </div>
          </div>
          <div className="p-4 border rounded-lg flex items-center gap-4">
            <img src="https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg" className="w-24 h-24 object-cover rounded" />
            <div>
              <div className="font-semibold">Buzz Cut</div>
              <div className="text-sm text-gray-500">سهلة جدًا للعناية</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
