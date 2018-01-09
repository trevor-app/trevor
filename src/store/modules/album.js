import { isEmpty } from 'lodash'
import * as api from 'store/api/albums-api.js'

export default {
    namespaced: true,
    state: {
      id: null,
      album: {},
      status: 'idle' // fetching, succeeded, failed
    },
    mutations: {
      setStatus (state, status) {
        state.status = status
      },
      setId (state, id) {
        state.id = id
      },
      setAlbum (state, album) {
        state.album = album
      }
    },
    actions: {
      fetchAlbumIfNeeded({ commit, state, dispatch }, id) {
        if (state.id === id) {
          if (state.status === 'succeeded') {
            return new Promise((resolve) => resolve(state.album))
          }
        }
        return dispatch('fetchAlbum', id)
      },
      fetchAlbum ({ commit, state, dispatch }, id) {
        commit('setAlbum', {})
        commit('setId', id)
        commit('setStatus', 'fetching')
        return api.fetchAlbum(id)
          .then((response) => {
            const album = response.data
            commit('setAlbum', album)
            commit('setStatus', 'succeeded')
            return album
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
