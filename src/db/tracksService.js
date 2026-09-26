import mockTracks from '../data/mockTracks.json'

// شبیه‌سازی گرفتن همه موزیک‌ها از دیتابیس
export function getAllTracks() {
  return mockTracks
}

// شبیه‌سازی گرفتن موزیک‌های علاقه‌مندی
export function getFavoriteTracks() {
  return mockTracks.filter(track => track.isFavorite)
}

// شبیه‌سازی گرفتن موزیک‌های سیوشده
export function getBookmarkedTracks() {
  return mockTracks.filter(track => track.isBookmarked)
}

// شبیه‌سازی گرفتن یک موزیک با آیدی مشخص
export function getTrackById(id) {
  return mockTracks.find(track => track.id === id)
}