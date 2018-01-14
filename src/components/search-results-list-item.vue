<template lang="html">
  <router-link class="search-results-list-item" :to="resultRoute">
    <trevor-image class="search-results-list-item__image" :src="result.image" :type="type"/>
    <div class="search-results-list-item__name" :class="name_classes">
      {{ result.name }}
    </div>
  </router-link>
</template>

<script>
import { isEmpty } from 'lodash'
import TrevorImage from 'components/trevor-image.vue'

export default {
  name: 'search-results-list-item',
  components: {
    TrevorImage
  },
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
    },
    type () {
      return this.result.type
    },
    name_classes () {
      return {
        [`search-results-list-item__name_${this.type}`]: true
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

    &_artist {
      text-align: center;
    }
  }
}
</style>
