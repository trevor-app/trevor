<template lang="html">
  <router-link class="artist-albums-list-item" :to="albumRoute">
    <trevor-image class="artist-albums-list-item__cover" :src="album.image" type="album">
    </trevor-image>
    <div class="artist-albums-list-item__name">{{ album.name }}</div>
    <div class="artist-albums-list-item__artist">{{ album.artist }}</div>
  </router-link>
</template>

<script>
import TrevorImage from 'components/trevor-image.vue'

export default {
  name: 'artist-albums-list-item',
  components: {
    TrevorImage
  },
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
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

$artist-albums-list-item__width: 155px;

.artist-albums-list-item {
  @include font-base;
  width: $artist-albums-list-item__width;
  display: inline-block;
  margin-bottom: 16px;
  margin-right: 16px;

  &__cover {
    width: $artist-albums-list-item__width;
    height: $artist-albums-list-item__width;
  }

  &__name {
    @include text-ellipsis;
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: $font-weight-normal;
  }

  &__artist {
    @include text-ellipsis;
    font-size: 12px;
    font-weight: $font-weight-normal;
  }
}
</style>
