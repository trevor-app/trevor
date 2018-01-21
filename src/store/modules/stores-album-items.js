import { isEmpty, assign, get, pick } from 'lodash'
import * as api from 'store/api/stores-api.js'

function sortItemByPriceInCentsAsc(a, b) {
  if (a.baseCurrencyPriceInCents > b.baseCurrencyPriceInCents) return 1
  if (a.baseCurrencyPriceInCents < b.baseCurrencyPriceInCents) return -1
  return 0
}

function sortItemByNameAsc (a, b) {
  let nameA = a.title.trim().toLowerCase(),
      nameB = b.title.trim().toLowerCase()
  if (nameA > nameB) return 1
  if (nameA < nameB) return -1
  return 0
}

const defaultState = {
  albumId: null,
  itemsByStore: {},
  errorByStore: {},
  statusByStore: {}
}

export default {
    namespaced: true,
    state: defaultState,
    mutations: {
      reset (state) {
        state = assign({}, defaultState)
      },
      setAlbumId (state, albumId) {
        state.albumId = albumId
      },
      setStatusByStore (state, { storeName, status }) {
        state.statusByStore = assign({}, state.statusByStore, {
          [storeName]: status
        })
      },
      setErrorByStore (state, { storeName, error }) {
        state.errorByStore = assign({}, state.errorByStore, {
          [storeName]: error
        })
      },
      setItemsByStore (state, { storeName, items }) {
        state.itemsByStore = assign({}, state.itemsByStore, {
          [storeName]: items
        })
      }
    },
    actions: {
      fetchStoresIfNeeded ({ rootGetters, dispatch }) {
        if (rootGetters['stores/hasStatus']('succeeded')) {
          return new Promise((resolve) => {
            const storeNames = rootGetters['stores/storeNames']
            return resolve(storeNames)
          })
        } else {
          return dispatch('stores/fetchStores', null, { root: true })
        }
      },
      fetchStoresAlbumItemsIfNeeded({ state, dispatch, getters }, albumId) {
        if (state.albumId === albumId) {
          if (getters.status === 'done') {
            return new Promise((resolve) => resolve(getters.items))
          }
        }
        return dispatch('fetchStoresAlbumItems', albumId)
      },
      fetchStoresAlbumItems ({ commit, state, dispatch, rootGetters }, albumId) {
        commit('reset')
        commit('setAlbumId', albumId)
        return dispatch('currencies/fetchRatesIfNeeded', null, { root: true })
          .then(() => {
            dispatch('fetchStoresIfNeeded')
            .then((storeNames) => {
              return storeNames.forEach((storeName) => {
                dispatch('fetchStoreAlbumItems', { storeName, albumId })
              })
            })
          })
      },
      fetchStoreAlbumItems ({ commit, rootState, rootGetters }, { storeName, albumId }) {
        commit('setItemsByStore', { storeName, items: [] })
        commit('setErrorByStore', { storeName, error: null })
        commit('setStatusByStore', { storeName, status: 'fetching' })
        return api.fetchStoreAlbumItems(storeName, albumId)
          .then((response) => {
            if (albumId !== rootState.album.id) return
            const items = response.data.reduce((items, item) => {
              const rate = rootGetters['currencies/rate'](item.currencyCode)
              if (item.currencyCode === rootGetters['currencies/base']) {
                item.baseCurrencyPriceInCents = item.priceInCents
              } else {
                // skip if currency rate not available
                if (item.priceInCents !== 0 && !rate) {
                  console.log('Empty rate', isEmpty(rate), rate, item.currencyCode);
                  return items
                }
                item.baseCurrencyPriceInCents = item.priceInCents / rate
              }
              item.baseCurrencyCode = rootGetters['currencies/base']
              items.push(item)
              return items
            }, [])
            commit('setItemsByStore', { storeName, items })
            commit('setStatusByStore', { storeName, status: 'succeeded' })
          })
          .catch((error) => {
            if (albumId !== rootState.album.id) return
            commit('setErrorByStore', { storeName, error })
            commit('setStatusByStore', { storeName, status: 'failed' })
          })
      }
    },
    getters: {
      storeNames (state) {
        return Object.keys(state.statusByStore)
      },
      status ({ statusByStore }, { storeNames }) {
        if (isEmpty(statusByStore)) return 'idle'
        const isFetching = storeNames.some((storeName) => {
          return statusByStore[storeName] === 'fetching'
        })
        if (isFetching) {
          return 'fetching'
        } else {
          return 'done'
        }
      },
      hasStatus: (state, getters) => (status) => {
        return getters.status === status
      },
      items ({ itemsByStore }) {
        return Object.keys(itemsByStore).reduce((items, storeName) => {
          const storeItems = get(itemsByStore, storeName, [])
          return items.concat(storeItems)
        }, [])
      },
      itemsSorted (state, getters) {
        let sortFunctions = [sortItemByPriceInCentsAsc, sortItemByNameAsc]
        sortFunctions = sortFunctions.reverse()
        return getters.items.sort((a, b) => {
          let result = 0
          let i = sortFunctions.length
          while (result == 0 && i--) {
            result = sortFunctions[i](a, b)
          }
          return result
        })
      }
    }
}
