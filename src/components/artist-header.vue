<template lang="html">
  <div class="artist-header">
    <trevor-image type="artist" :src="artist.image"></trevor-image>
    <div class="album-header__info">
      <h1 class="artist-header__name">
        <router-link :to="artistRoute">
          {{ artist.name }}
        </router-link>
      </h1>
      <div class="album-header__summary" v-html="artist.summary"></div>
    </div>
  </div>
</template>

<script>
import TrevorImage from 'components/trevor-image.vue'

export default {
  name: 'artist-header',
  components: {
    TrevorImage
  },
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    artistRoute () {
      return {
        name: 'artist',
        params: { id: encodeURIComponent(this.artist.mbid) }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.artist-header {

  &__name {
    @include font-base;
    margin: 8px 0;
    font-weight: $font-weight-normal;
  }

  &__summary {
    @include font-base;
    font-weight: $font-weight-light;
  }
}
</style>
