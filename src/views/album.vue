<template>
  <div class="album">
    <div v-show="hasStatus('succeeded')">
      <img :src="album.image" />
      <h1>{{ album.name }}</h1>
      <h2>{{ album.artist }}</h2>
      <div v-html="album.summary"></div>
    </div>
    <template v-if="hasStatusStoresAlbumItems('fetching')">
      Fetching...
    </template>
    <template v-else>
      <album-items-list :items="items"></album-items-list>
    </template>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
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
  computed: {
    ...mapState('album', [
      'album'
    ]),
    ...mapGetters('album', [
      'hasStatus'
    ]),
    ...mapGetters('storesAlbumItems', {
      'hasStatusStoresAlbumItems': 'hasStatus',
      'items': 'items'
    })
  },
  methods: {
    ...mapActions('album', [
      'fetchAlbumIfNeeded',
    ]),
    ...mapActions('storesAlbumItems', [
      'fetchStoresAlbumItemsIfNeeded'
    ]),
    fetchData() {
      this.fetchAlbumIfNeeded(this.id)
      this.fetchStoresAlbumItemsIfNeeded(this.id)
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
