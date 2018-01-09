<template>
  <div class="artist">
    <img :src="artist.image" />
    <h1>{{ artist.name }}</h1>
    <div v-html="artist.summary"></div>
    <h2>Albums</h2>
    <template v-for="album in albums">
      <router-link
        tag="div"
        :to="{ name: 'album', params: { id: album.mbid } }">
        <h3>{{ album.name }}</h3>
        <img :src="album.image" width="100" height="100"/>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'artist',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      artist: {},
      albums: []
    }
  },
  computed: {
  },
  methods: {
    fetchData() {
      this.artist = {"name":"Muse","mbid":"fd857293-5ab8-40de-b29e-55a69d4e4d0f","url":"https://www.last.fm/music/Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/c02beb4a355a40faaadf834422bbacef.png","summary":"Muse are an alternative rock band from Teignmouth, England, United Kingdom. The band consists of Matthew Bellamy on lead vocals, piano, keyboard and guitar, Chris Wolstenholme on backing vocals and bass guitar, and Dominic Howard on drums and percussion.  \n\nThey have been friends since their formation in early 1994 and changed band names a number of times (such as Gothic Plague, Fixed Penalty, and Rocket Baby Dolls) before adopting the name Muse. Since the release of their fourth album \u003ca href=\"https://www.last.fm/music/Muse\"\u003eRead more on Last.fm\u003c/a\u003e"}
      this.albums = [{"name":"Black Holes and Revelations","mbid":"aefcf53b-5980-463b-b03d-a6c8da6a9432","url":"https://www.last.fm/music/Muse/Black+Holes+and+Revelations","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/5a694d526fd8ee9cee01bada31f7f724.png"},{"name":"Absolution","mbid":"1dad9b13-1f02-33f6-815e-7fb2e6af17ea","url":"https://www.last.fm/music/Muse/Absolution","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/76d9d3dc96e6ae51c01b4651c062947c.png"},{"name":"Origin of Symmetry","mbid":"1cc29145-b0e4-47bf-8bda-a1edef67dd1d","url":"https://www.last.fm/music/Muse/Origin+of+Symmetry","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/4f35bbf84867e16328a9d1e0e64999cc.png"},{"name":"The Resistance","mbid":"6a5d9eac-0fa6-3170-9cff-a1cb832fd8cd","url":"https://www.last.fm/music/Muse/The+Resistance","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/dd4c95317aaa3537dbf0a8dc4d9c7d79.png"},{"name":"Showbiz","mbid":"c8d7945e-e193-4677-b39e-248ce81936e7","url":"https://www.last.fm/music/Muse/Showbiz","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/ab536e29d6814fc0b771351495f711e5.png"},{"name":"The 2nd Law","mbid":"e3c0e7c7-df7c-4b51-9894-e45d1480e7b5","url":"https://www.last.fm/music/Muse/The+2nd+Law","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/0263c196b215cc6ee4016ddd75b1af2c.png"},{"name":"Black Holes \u0026 Revelations","mbid":"c01b2873-010d-407e-92ee-dfb39b42751e","url":"https://www.last.fm/music/Muse/Black+Holes+\u0026+Revelations","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/7f6f006d37bdeeb9fe502c448861881d.png"},{"name":"Supermassive Black Hole","mbid":"4b520816-0154-4435-ac2f-abfa1014d90c","url":"https://www.last.fm/music/Muse/Supermassive+Black+Hole","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/14d3f86de8e20bfcd98b47e2a99ba706.png"},{"name":"Hullabaloo","mbid":"a9863c65-f335-484e-8e00-735cb376bf85","url":"https://www.last.fm/music/Muse/Hullabaloo","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/f829a1e698b5e7c3805f86e86e1a923a.png"},{"name":"Dead Star / In Your World","mbid":"b5b5e943-bdc9-4c46-be49-aba374437b37","url":"https://www.last.fm/music/Muse/Dead+Star+%2F+In+Your+World","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/1434179e41194687fe9b149f7db2cb62.png"},{"name":"HAARP","mbid":"b7cfcbb0-bfb6-3d57-82c8-f6c2a5cf30e5","url":"https://www.last.fm/music/Muse/HAARP","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/bc99743699d846d39c580248bc072895.png"},{"name":"Madness","mbid":"1ed5cabd-1c29-43e3-b541-60ff96d212ed","url":"https://www.last.fm/music/Muse/Madness","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/ede5c98a0370fdac072efb35baa3e0ee.png"},{"name":"Uprising","mbid":"9d9d6fac-d43f-4bfd-8085-4224fbc7098f","url":"https://www.last.fm/music/Muse/Uprising","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/928661f5567e54ca9e56db5d095ef49a.png"},{"name":"Live At Rome Olympic Stadium","mbid":"089ca863-f9e8-40bc-93e3-4d91e5054edb","url":"https://www.last.fm/music/Muse/Live+At+Rome+Olympic+Stadium","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/1b37f03f72f9871e9a36a3e8d8589b40.png"},{"name":"Unintended 1","mbid":"21b727c6-a107-4e9a-ac43-85730fb0f2d4","url":"https://www.last.fm/music/Muse/Unintended+1","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/ae0092b3e3294a209532b8fdc12ec9aa.png"},{"name":"Hysteria","mbid":"fa4705a9-e995-47d2-b15d-9b60a95cf8f5","url":"https://www.last.fm/music/Muse/Hysteria","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/ee1d1222430a4ec38a2448ccb8ddea1b.png"},{"name":"Resistance","mbid":"1910e94c-807e-41f0-999e-006662158af9","url":"https://www.last.fm/music/Muse/Resistance","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/f3428a23a6e7117417dc0801026cc07e.png"},{"name":"Starlight","mbid":"2ff6de08-9f4c-3a8e-93ce-27223325bfbe","url":"https://www.last.fm/music/Muse/Starlight","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/899ab16508eba36985a6b80331574001.png"},{"name":"Survival","mbid":"465855f5-b7a6-44e0-b1ad-5a3aaa6511bc","url":"https://www.last.fm/music/Muse/Survival","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/d51e44e6e1fc479babbf210698423560.png"},{"name":"Uno","mbid":"98ca5b11-2619-4f46-ab47-6b41b5b2e6ff","url":"https://www.last.fm/music/Muse/Uno","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/b5d371b8512e477ebf7baabbc9c6ea27.png"},{"name":"Knights of Cydonia","mbid":"0e3e10e3-cd51-48c4-aa7a-fbfd098eeadf","url":"https://www.last.fm/music/Muse/Knights+of+Cydonia","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/fda2989b84dff725092cd8ebbf850752.png"},{"name":"Feeling Good / Hyper Music","mbid":"d1d2afc4-d53c-4b56-8678-90fafe4242b9","url":"https://www.last.fm/music/Muse/Feeling+Good+%2F+Hyper+Music","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/4019c3bae5a24b25cb3546e0d61f37db.png"},{"name":"Plug In Baby","mbid":"6abd07f1-9c3d-4e5f-9c4c-d820e77abc11","url":"https://www.last.fm/music/Muse/Plug+In+Baby","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/1bcee1a02a7e43f7b488568c01702480.png"},{"name":"Muscle Museum","mbid":"e786108c-d8f6-414f-896a-748148d611dd","url":"https://www.last.fm/music/Muse/Muscle+Museum","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/76f0899586385a8b09aba6eb4c20137a.png"},{"name":"Time Is Running Out","mbid":"b37e259a-8e39-3958-bb11-8df15b9b678c","url":"https://www.last.fm/music/Muse/Time+Is+Running+Out","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/ce66c61a187f44a7918edb1870e7781a.png"},{"name":"New Born","mbid":"b240c879-7f5c-4d36-abde-8b93b3d80746","url":"https://www.last.fm/music/Muse/New+Born","artist":"Muse","image":"https://lastfm-img2.akamaized.net/i/u/174s/30c765912b6547b29c2fd2882213eaa7.png"}]
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.artist {
}
</style>
