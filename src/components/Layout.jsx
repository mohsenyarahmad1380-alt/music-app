import { Outlet, useLocation, useSearchParams, Link } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const isPlayerPage = location.pathname.startsWith('/player')
  const isHomePage = location.pathname === '/'
  const activeTab = searchParams.get('tab') || 'all'

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      <header className="h-14 flex items-center justify-between px-4 bg-gray-800 shrink-0">
        <button className="text-2xl">☰</button>
        <h1 className="text-lg font-bold">موزیک پلیر</h1>
      </header>

      {isHomePage && (
        <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-gray-800 shrink-0">
          <Link to="/folders" className="px-4 py-1.5 rounded-full bg-gray-700 whitespace-nowrap text-sm">
            گروه‌ها
          </Link>
          <button
            onClick={() => setSearchParams({ tab: 'all' })}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${activeTab === 'all' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            همه
          </button>
          <button
            onClick={() => setSearchParams({ tab: 'favorites' })}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${activeTab === 'favorites' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            علاقه‌مندی
          </button>
          <button
            onClick={() => setSearchParams({ tab: 'bookmarks' })}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${activeTab === 'bookmarks' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            سیوها
          </button>
        </div>
      )}

      <main className={`flex-1 overflow-y-auto ${!isPlayerPage ? 'pb-20' : ''}`}>
        <Outlet />
      </main>

      {!isPlayerPage && (
        <footer className="h-16 flex items-center px-4 bg-gray-800 fixed bottom-0 left-0 right-0">
          <p className="text-sm text-gray-400">جای مینی‌پلیر</p>
        </footer>
      )}

    </div>
  )
}

export default Layout