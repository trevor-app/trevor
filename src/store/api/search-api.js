import api from 'store/api/api.js'

export function search (query) {
  return api.get('search', {
    params: { query }
  })
}
