import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isPlayerPage = location.pathname.startsWith('/player')
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      {/* هدر - همیشه ثابت */}
      <header className="h-14 flex items-center justify-between px-4 bg-gray-800 shrink-0">
        <button className="text-2xl">☰</button>
        <h1 className="text-lg font-bold">موزیک پلیر</h1>
      </header>

      {/* تب‌ها - فقط توی صفحه اصلی */}
      {isHomePage && (
        <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-gray-800 shrink-0">
          <button className="px-4 py-1.5 rounded-full bg-gray-700 whitespace-nowrap text-sm">گروه‌ها</button>
          <button className="px-4 py-1.5 rounded-full bg-blue-600 whitespace-nowrap text-sm">همه</button>
          <button className="px-4 py-1.5 rounded-full bg-gray-700 whitespace-nowrap text-sm">علاقه‌مندی</button>
          <button className="px-4 py-1.5 rounded-full bg-gray-700 whitespace-nowrap text-sm">سیوها</button>
        </div>
      )}

      {/* محتوای هر صفحه */}
      <main className={`flex-1 overflow-y-auto ${!isPlayerPage ? 'pb-20' : ''}`}>
        <Outlet />
      </main>

      {/* مینی‌پلیر - همه‌جا به‌جز صفحه پخش */}
      {!isPlayerPage && (
        <footer className="h-16 flex items-center px-4 bg-gray-800 fixed bottom-0 left-0 right-0">
          <p className="text-sm text-gray-400">جای مینی‌پلیر</p>
        </footer>
      )}

    </div>
  )
}

export default Layout