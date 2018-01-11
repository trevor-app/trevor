<template lang="html">
  <div class="search-results-list-item">
    <router-link tag="div" :to="resultRoute">
      <div class="result__name">
        {{ result.name }}
      </div>
      <div class="result__type">
        {{ result.type }}
      </div>
      <img :src="result.image"/>
    </router-link>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'search-results-list-item',
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    resultRoute () {
      return {
        name: this.result.type,
        params: { id: this.result.mbid }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.search-results-list {

}
</style>
