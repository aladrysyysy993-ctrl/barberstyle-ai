import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header(){
  const router = useRouter()
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-black">BarberStyle <span className="text-gold">AI</span></div>
          <nav className="hidden sm:flex space-x-3 text-sm">
            <Link href="/" className="text-gray-700">الصفحة الرئيسية</Link>
            <Link href="/quiz" className="text-gray-700">اختبار</Link>
            <Link href="/library" className="text-gray-700">مكتبة القصات</Link>
            <Link href="/favorites" className="text-gray-700">المفضلة</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/settings" className="text-sm text-gray-600">الإعدادات</Link>
        </div>
      </div>
    </header>
  )
}

export default function App({ Component, pageProps }){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header/>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} BarberStyle AI — نموذج أولي
      </footer>
    </div>
  )
}
