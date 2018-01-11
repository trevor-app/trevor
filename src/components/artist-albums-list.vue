<template lang="html">
  <div class="artist-albums-list">
    <artist-albums-list-item
      v-for="album in albums"
      :key="album.mbid"
      :album="album">
    </artist-albums-list-item>
  </div>
</template>

<script>
// TODO: Something like this https://itunes.apple.com/ca/artist/muse/1093360#see-all/recent-albums.
import ArtistAlbumsListItem from 'components/artist-albums-list-item'

export default {
  name: 'artist-albums-list',
  components: {
    ArtistAlbumsListItem
  },
  props: {
    albums: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.artist-albums-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
