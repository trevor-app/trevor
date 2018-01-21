import { isEmpty } from 'lodash'
import * as api from 'store/api/currencies-api.js'

function pad (number) {
  if (number < 10) number = '0' + number
  return number
}

function currentDateISO8601 () {
  const date = new Date()
  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate())
  ].join('-')
}

export default {
    namespaced: true,
    state: {
      base: 'CAD',
      date: null,
      rates: {},
      status: 'idle' // fetching, succeeded, failed
    },
    mutations: {
      setStatus (state, status) {
        state.status = status
      },
      setData (state, data) {
        state = Object.assign(state, data)
      },
      setBase (state, base) {
        state.base = base
      },
      setDate (state, date) {
        state.date = date
      },
      setRates (state, rates) {
        state.rates = rates
      }
    },
    actions: {
      fetchRatesIfNeeded({ commit, state, dispatch }) {
        const date = currentDateISO8601()
        if (state.date === date) {
          if (state.status === 'succeeded') {
            return new Promise((resolve) => resolve(state.rates))
          }
        }
        return dispatch('fetchRates')
      },
      fetchRates ({ commit, state, dispatch }) {
        commit('setRates', {})
        commit('setDate', null)
        commit('setStatus', 'fetching')
        return api.fetchRates(state.base)
          .then((response) => {
            commit('setData', response.data)
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
      },
      rate: (state) => (currency) => {
        return state.rates[currency]
      },
      base (state) {
        return state.base
      }
    }
}
