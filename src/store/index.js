import Vue from 'vue'
import Vuex from 'vuex'
import search from 'store/modules/search'
import artist from 'store/modules/artist'
import albums from 'store/modules/albums'
import album from 'store/modules/album'
import stores from 'store/modules/stores'
import storesAlbumItems from 'store/modules/stores-album-items'
import currencies from 'store/modules/currencies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    artist,
    albums,
    album,
    stores,
    storesAlbumItems,
    currencies
  }
})
