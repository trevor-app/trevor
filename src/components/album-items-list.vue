<template>
  <div class="album-items-list">
    <template v-for="item in items">
      <AlbumItemsListItem :key="item.id" :item="item"></AlbumItemsListItem>
    </template>
    <div v-if="items.length === 0">
      Nothing found.
    </div>
  </div>
</template>

<script>
import { assign, pick } from 'lodash'
import AlbumItemsListItem from 'components/album-items-list-item'

export default {
  name: 'album-items-list',
  components: {
    AlbumItemsListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    itemId (item) {
      return [item.store, item.url, item.isUsed].join('-')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

$item-spacing: 15px;
$item-section-spacing: 10px;
$album-items-list-padding: ($item-spacing/2) 0;

.album-items-list {
  // list-style: none;
  // padding: 0;
  // margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: $album-items-list-padding;
  // width: 100%;
}

@media (max-width:767px) {
  .album-items-list {
  }
}

@media (min-width:768px) {
  .album-items-list {
  }
}

@media (min-width:992px) {
  .album-items-list {
  }
}

@media (min-width:1200px) {
  .album-items-list {
  }
}
</style>
