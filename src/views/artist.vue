<template>
  <div class="artist">
    <template v-if="hasStatusArtist('succeeded')">
      <artist-header :artist="artist"></artist-header>
    </template>
    <h2>Top Albums</h2>
    <template v-if="hasStatusAlbums('fetching')">
      Fetching...
    </template>
    <template v-if="hasStatusAlbums('succeeded')">
      <artist-albums-list :albums="albums"></artist-albums-list>
    </template>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import ArtistHeader from 'components/artist-header.vue'
import ArtistAlbumsList from 'components/artist-albums-list.vue'

export default {
  name: 'artist',
  components: {
    ArtistHeader,
    ArtistAlbumsList
  },
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
  @include content;
  @include font-base;
  font-weight: $font-weight-light;
  flex-flow: column;
}
</style>
