import api from 'store/api/api.js'

export function fetchStores () {
  return api.get(`stores`)
}

export function fetchStoreAlbumItems (storeName, albumId) {
  return api.get(`stores/${storeName}/albums/${albumId}/items`)
}
