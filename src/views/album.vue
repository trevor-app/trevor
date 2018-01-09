<template>
  <div class="album">
    <div>
      <img :src="album.image" />
      <h1>{{ album.name }}</h1>
      <h2>{{ album.artist }}</h2>
      <div v-html="album.summary"></div>
    </div>
    <album-items-list :items="items"></album-items-list>
  </div>
</template>

<script>
import AlbumItemsList from 'components/album-items-list'

export default {
  name: 'album',
  components: {
    AlbumItemsList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      album: {},
      items: []
    }
  },
  computed: {
  },
  methods: {
    fetchData() {
      this.album = {"name":"Black Holes and Revelations","artist":"Muse","mbid":"aefcf53b-5980-463b-b03d-a6c8da6a9432","url":"https://www.last.fm/music/Muse/Black+Holes+and+Revelations","image":"https://lastfm-img2.akamaized.net/i/u/174s/5a694d526fd8ee9cee01bada31f7f724.png","summary":"Black Holes and Revelations is the fourth studio album by English alternative rock band Muse, released on 3 July 2006. Recording was split between New York and France, and it was the first time Muse had taken a more active role in the album's production. The album was a change in style from Muse's previous albums, and the band cited influences that included Queen, Millionaire, Sly and the Family Stone, Depeche Mode, Franz Ferdinand and music from southern Italy. \u003ca href=\"http://www.last.fm/music/Muse/Black+Holes+and+Revelations\"\u003eRead more on Last.fm\u003c/a\u003e."}
      this.items = [{"id":"iTunes-CA-992221994","artist":"Muse","title":"Black Holes and Revelations","store":"iTunes-CA","priceInCents":999,"currencyCode":"CAD","url":"https://itunes.apple.com/ca/album/black-holes-and-revelations/992221994?uo=4","imageUrl":"http://is3.mzstatic.com/image/thumb/Music5/v4/ad/e3/ec/ade3ec96-5a7f-6b5d-cdfe-b00da6489ba6/source/100x100bb.jpg","isUsed":false,"format":["Digital"]}]
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

.album {
}
</style>
