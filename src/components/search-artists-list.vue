<template lang="html">
  <div class="search-results-list">
    <search-results-list-item
      v-for="result in artists"
      :key="result.name + result.mbid"
      :result="result">
    </search-results-list-item>
  </div>
</template>

<script>
import SearchResultsListItem from 'components/search-results-list-item.vue'

export default {
  name: 'search-artists-list',
  components: {
    SearchResultsListItem
  },
  props: {
    artists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.search-results-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
