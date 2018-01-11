<template lang="html">
  <div class="album-header">
    <img :src="album.image" />
    <div class="album-header__info">
      <h1 class="album-header__name">
        <router-link :to="albumRoute">
          {{ album.name }}
        </router-link>
      </h1>
      <h2 class="album-header__artist">
        <router-link :to="artistRoute">
          {{ album.artist }}
        </router-link>
      </h2>
      <div class="album-header__summary" v-html="album.summary"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'album-header',
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    albumRoute () {
      return {
        name: 'album',
        params: { id: this.album.mbid }
      }
    },
    artistRoute () {
      return {
        name: 'artist',
        params: { id: encodeURIComponent(this.album.artist) }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.album-header {
  &__name {
    @include font-base;
    margin: 8px 0;
    font-weight: $font-weight-normal;
  }

  &__artist {
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
