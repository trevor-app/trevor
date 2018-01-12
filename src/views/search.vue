<template>
  <div class="search">
    <h1>Results for '{{ query }}'</h1>
    <template v-if="hasStatus('searching')">
      Searching...
    </template>
    <template v-if="hasStatus('succeeded')">
      <h2>Albums</h2>
      <search-albums-list :albums="albums"></search-albums-list>
      <h2>Artists</h2>
      <search-artists-list :artists="artists"></search-artists-list>
    </template>
  </div>
</template>

<script>
import { get } from 'lodash'
import { mapState, mapActions, mapGetters } from 'vuex'
import SearchAlbumsList from 'components/search-albums-list.vue'
import SearchArtistsList from 'components/search-artists-list.vue'

export default {
  name: 'search',
  components: {
    SearchAlbumsList,
    SearchArtistsList
  },
  computed: {
    ...mapState('search', [
      'collection',
      'status'
    ]),
    ...mapGetters('search', [
      'hasStatus'
    ]),
    query () {
      return this.$route.query.query
    },
    artists () {
      return this.collection.filter(result => result.type === 'artist').slice(0, 5)
    },
    albums () {
      return this.collection.filter(result => result.type === 'album').slice(0, 5)
    }
  },
  methods: {
    ...mapActions('search', [
      'search'
    ]),
    fetchData () {
      const query = get(this.$route, 'query.query', '')
      this.search(query)
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

.search {
  @include content;
  @include font-base;
  flex-flow: column;
}

.suggestion {
  margin: 10px;
}
</style>
