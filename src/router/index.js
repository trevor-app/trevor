import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from 'views/landing.vue'
import Search from 'views/search.vue'
import Artist from 'views/artist.vue'
import Album from 'views/album.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'landing',
    path: '/',
    component: Landing
  },
  {
    name: 'search',
    path: '/search',
    props: true,
    component: Search
  },
  {
    name: 'artist',
    path: '/artists/:id',
    props: true,
    component: Artist
  },
  {
    name: 'album',
    path: '/albums/:id',
    props: true,
    component: Album
  }
]

export default new VueRouter({
  routes
})
