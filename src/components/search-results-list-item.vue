<template lang="html">
  <div class="">
    <router-link class="search-results-list-item" :to="resultRoute">
      <img class="search-results-list-item__image" :src="result.image" />
      <div class="search-results-list-item__name">{{ result.name }}</div>
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

$search-results-list-item__width: 155px;

.search-results-list-item {
  @include font-base;
  width: $search-results-list-item__width;
  display: inline-block;
  margin-bottom: 16px;
  margin-right: 16px;

  &__image {
    width: $search-results-list-item__width;
    height: $search-results-list-item__width;
  }

  &__name {
    @include text-ellipsis;
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: $font-weight-normal;
  }
}
</style>
