import api from 'store/api/api'

export function fetchAlbum (id) {
  return api.get(`albums/${id}`)
}
