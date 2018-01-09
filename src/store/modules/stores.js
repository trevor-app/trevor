import { isEmpty } from 'lodash'
import * as api from 'store/api/stores-api.js'

export default {
    namespaced: true,
    state: {
      collection: [],
      status: 'idle', // fetching, succeeded, failed
    },
    mutations: {
      setStatus (state, status) {
        state.status = status
      },
      setCollection (state, collection) {
        state.collection = collection
      }
    },
    actions: {
      fetchStores ({ commit, state, dispatch }) {
        commit('setCollection', [])
        commit('setStatus', 'fetching')
        return api.fetchStores()
          .then((response) => {
            commit('setCollection', response.data)
            commit('setStatus', 'succeeded')
            return response.data
          })
          .catch((error) => {
            commit('setStatus', 'failed')
          })
      }
    },
    getters: {
      hasStatus: (state) => (status) => {
        return state.status === status
      },
      storeNames (state) {
        return state.collection.map((store) => store)
      }
    }
}
