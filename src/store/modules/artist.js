import { isEmpty } from 'lodash'
import * as api from 'store/api/artists-api.js'

export default {
    namespaced: true,
    state: {
      id: null,
      artist: {},
      status: 'idle' // fetching, succeeded, failed
    },
    mutations: {
      setStatus (state, status) {
        state.status = status
      },
      setId (state, id) {
        state.id = id
      },
      setArtist (state, artist) {
        state.artist = artist
      }
    },
    actions: {
      fetchArtistIfNeeded({ commit, state, dispatch }, id) {
        if (state.id === id) {
          if (state.status === 'succeeded') {
            return new Promise((resolve) => resolve(state.artist))
          }
        }
        return dispatch('fetchArtist', id)
      },
      fetchArtist ({ commit, state, dispatch }, id) {
        commit('setArtist', {})
        commit('setId', id)
        commit('setStatus', 'fetching')
        return api.fetchArtist(id)
          .then((response) => {
            const artist = response.data
            commit('setArtist', artist)
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
