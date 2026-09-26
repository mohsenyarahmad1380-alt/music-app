function TrackCard({ track }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800 rounded-2xl p-2.5">
      
      {/* دکمه پخش - سمت راست (چون اول در DOM میاد و صفحه RTL هست) */}
      <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
        ▶
      </button>

      {/* اسم و خواننده - وسط */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate">{track.title}</p>
        <p className="text-xs text-gray-400 truncate">{track.artist}</p>
      </div>

      {/* عکس کاور - سمت چپ */}
      <div className="w-11 h-11 rounded-xl bg-linear-to-br from-purple-500 to-orange-400 shrink-0"></div>

    </div>
  )
}

export default TrackCard