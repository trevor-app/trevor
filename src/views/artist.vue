<template>
  <div class="artist">
    <template v-if="hasStatusArtist('succeeded')">
      <img :src="artist.image" />
      <h1>{{ artist.name }}</h1>
      <div v-html="artist.summary"></div>
    </template>
    <h2>Albums</h2>
    <template v-if="hasStatusAlbums('fetching')">
      Fetching...
    </template>
    <template v-if="hasStatusAlbums('succeeded')">
      <template v-for="album in albums">
        <router-link
          tag="div"
          :to="{ name: 'album', params: { id: album.mbid } }">
          <h3>{{ album.name }}</h3>
          <img :src="album.image" width="100" height="100"/>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'artist',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('artist', [
      'artist'
    ]),
    ...mapGetters('artist', {
      'hasStatusArtist': 'hasStatus'
    }),
    ...mapState('albums', {
      'albums': 'collection'
    }),
    ...mapGetters('albums', {
      'hasStatusAlbums': 'hasStatus'
    })
  },
  methods: {
    ...mapActions('artist', [
      'fetchArtistIfNeeded',
    ]),
    ...mapActions('albums', [
      'fetchArtistAlbumsIfNeeded',
    ]),
    fetchData() {
      this.fetchArtistIfNeeded(this.id)
      this.fetchArtistAlbumsIfNeeded(this.id)
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
