import { isEmpty } from 'lodash'
import * as api from 'store/api/search-api.js'

const options = {
  timeout: 300
}

export default {
    namespaced: true,
    state: {
      collection: [],
      query: '',
      status: 'idle', // searching, succeeded, failed
    },
    mutations: {
      setStatus (state, status) {
        state.status = status
      },
      setQuery (state, query) {
        state.query = query
      },
      setCollection (state, collection) {
        state.collection = collection
      }
    },
    actions: {
      search ({ commit, state }, query) {
        commit('setQuery', query)
        commit('setCollection', [])
        commit('setStatus', 'searching')
        return api.search(query)
          .then((response) => {
            commit('setCollection', response.data)
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
