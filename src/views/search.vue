<template>
  <div class="suggestions">
    <template v-if="hasStatus('searching')">
      Searching...
    </template>
    <div v-for="suggestion in collection">
      <router-link
        tag="div"
        class="suggestion"
        :to="{ name: suggestion.type, params: { id: suggestion.mbid } }">
          <div class="suggestion__name">
            {{ suggestion.name }}
          </div>
          <div class="suggestion__type">
            {{ suggestion.type }}
          </div>
          <img :src="suggestion.image"/>
        </router-link>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'search',
  computed: {
    ...mapState('search', [
      'collection',
      'status'
    ]),
    ...mapGetters('search', [
      'hasStatus'
    ]),
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

.suggestions {
}

.suggestion {
  margin: 10px;
}
</style>
