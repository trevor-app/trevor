import { isEmpty } from 'lodash'
import * as api from 'store/api/artists-api.js'

const options = {
  timeout: 300
}

export default {
    namespaced: true,
    state: {
      artistId: null,
      collection: [],
      status: 'idle' // fetching, succeeded, failed
    },
    mutations: {
      setArtistId (state, artistId) {
        state.artistId = artistId
      },
      setStatus (state, status) {
        state.status = status
      },
      setCollection (state, collection) {
        state.collection = collection
      }
    },
    actions: {
      fetchArtistAlbumsIfNeeded ({ commit, state, dispatch }, artistId) {
        if (state.artistId === artistId) {
          if (state.status === 'succeeded') {
            return new Promise((resolve) => resolve(state.collection))
          }
        }
        return dispatch('fetchArtistAlbums', artistId)
      },
      fetchArtistAlbums ({ commit, state, dispatch }, artistId) {
        commit('setCollection', [])
        commit('setArtistId', artistId)
        commit('setStatus', 'fetching')
        return api.fetchArtistAlbums(artistId)
          .then((response) => {
            const collection = response.data
            commit('setCollection', collection)
            commit('setStatus', 'succeeded')
          })
          .catch((error) => {
            commit('setStatus', 'failed')
          })
      }
    },
    getters: {
      hasStatus: (state) => (status) => {
        return state.status === status
      }
    }
}
