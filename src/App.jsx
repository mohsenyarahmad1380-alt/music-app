import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FoldersPage from './pages/FoldersPage'
import PlayerPage from './pages/PlayerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="folders" element={<FoldersPage />} />
          <Route path="player/:id" element={<PlayerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App