<template>
  <div class="album">
    <template v-show="hasStatus('succeeded')">
      <album-header :album="album"></album-header>
    </template>
    <template v-if="hasStatusStoresAlbumItems('fetching')">
      Fetching...
    </template>
    <template v-else>
      <div class="album-items">
        <h3 class="album-items__title">Best price online</h3>
        <album-items-list :items="items"></album-items-list>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import AlbumHeader from 'components/album-header.vue'
import AlbumItemsList from 'components/album-items-list'

export default {
  name: 'album',
  components: {
    AlbumHeader,
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
      'items': 'itemsSorted'
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
  @include font-base;
  @include content;
  flex-flow: column;
}

.album-items {
  padding: 16px 0;

  &__title {
    margin: 8px 0;
    font-weight: $font-weight-normal;
  }
}


</style>
