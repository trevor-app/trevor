import api from 'store/api/api.js'

export function fetchArtist (id) {
  return api.get(`artists/${id}`)
}

export function fetchArtistAlbums (id) {
  return api.get(`artists/${id}/albums`)
}
