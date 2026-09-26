import { useSearchParams } from 'react-router-dom'
import { getAllTracks, getFavoriteTracks, getBookmarkedTracks } from '../../db/tracksService'
import TrackCard from '../../components/TrackCard'

function HomePage() {
  const [searchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') || 'all'

  let filteredTracks = []
  if (activeTab === 'all') {
    filteredTracks = getAllTracks()
  } else if (activeTab === 'favorites') {
    filteredTracks = getFavoriteTracks()
  } else if (activeTab === 'bookmarks') {
    filteredTracks = getBookmarkedTracks()
  }

  return (
    <div className="px-4 pt-2 space-y-3">
      {filteredTracks.map(track => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  )
}

export default HomePage