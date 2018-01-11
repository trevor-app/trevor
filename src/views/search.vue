<template>
  <div class="search">
    <h1>Results for '{{ query }}'</h1>
    <template v-if="hasStatus('searching')">
      Searching...
    </template>
    <search-results-list :results="collection"></search-results-list>
  </div>
</template>

<script>
import { get } from 'lodash'
import { mapState, mapActions, mapGetters } from 'vuex'
import SearchResultsList from 'components/search-results-list.vue'

export default {
  name: 'search',
  components: {
    SearchResultsList
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
  flex-flow: column;
}

.suggestion {
  margin: 10px;
}
</style>
