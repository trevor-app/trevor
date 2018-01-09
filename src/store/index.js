import Vue from 'vue'
import Vuex from 'vuex'
// import suggestions from 'store/modules/suggestions'
import search from 'store/modules/search'
import artist from 'store/modules/artist'
import albums from 'store/modules/albums'
// import album from 'store/modules/album'
// import stores from 'store/modules/stores'
// import storesAlbumItems from 'store/modules/stores-album-items'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    artist,
    albums
  }
})
