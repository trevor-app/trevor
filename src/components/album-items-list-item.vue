<template>
  <div
    class="album-items-list-item"
    @click="handleClick">
    <div class="album-items-list-item__image">
      <trevor-image type="album" :src="item.imageUrl"></trevor-image>
    </div>
    <div class="album-items-list-item__info">
      <div class="album-items-list-item__description">
        <ul>
          <li class="album-items-list-item__description__title">{{ item.title }}</li>
          <li class="album-items-list-item__description__artist">{{ item.artist }}</li>
          <li class="album-items-list-item__description__format">{{ format }}</li>
          <li v-if="item.isUsed">
            <span class="album-items-list-item__description__used">
              Used
            </span>
          </li>
        </ul>
      </div>
      <div class="album-items-list-item__price">
        <div class="album-items-list-item__price__amount">
          {{ price }}
        </div>
        <div class="album-items-list-item__price__store">
          {{item.store}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { round, padEnd } from 'lodash'
import TrevorImage from 'components/trevor-image.vue'

export default {
  name: 'app-items-list-item',
  components: {
    TrevorImage
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  computed: {
    price: function () {
      let price = round(this.item.priceInCents / 100, 2).toString()
      let matches = price.match(/(\d*)\.?(\d*)?/)
      if (matches) {
        let [ total, dollar, cent ] = matches
        return  `$${dollar}.${padEnd(cent, 2, '0')}`
      }
    },
    format: function () {
      return this.item.format.join(', ')
    }
  },
  methods: {
    handleClick (event) {
      event.preventDefault()
      window.open(this.item.url);
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

$item-spacing: 15px;
$item-section-spacing: 10px;
$app-items-list-border-size: 1px;
$album-items-list-item-padding: \
  (($item-spacing/4) + $app-items-list-border-size) \
  $item-section-spacing \
  ($item-spacing/4) \
  $item-section-spacing;
$album-items-list-item__description-padding: 0 $item-section-spacing;
$album-items-list-item__price__amount-padding-bottom: 5px;

.album-items-list-item {
  @include font-base;
  text-transform: uppercase;
  color: $color-light-black;
  &__description {}
  &__price {}
}

.album-items-list-item {
  cursor: pointer;
  line-height: 1.2em;
  font-size: 12px;
  flex: 1 0 100%;
  display: flex;
  justify-content: space-between;
  padding: $album-items-list-item-padding;
  border-bottom-color: $color-dark-white;
  border-bottom-style: solid;
  border-bottom-width: $app-items-list-border-size;
  box-sizing: border-box;
}

.album-items-list-item__image {
  img {
    width: 100px;
    height: 100px;
  }
  flex: 0 1 auto;
}

.album-items-list-item__info {
  flex: 0 1 100%;
  display: flex;
}

.album-items-list-item__description {
  font-size: 11px;
  flex: 0 1 100%;
  padding: $album-items-list-item__description-padding;
  align-self: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__title {
    font-weight: $font-weight-bold;
  }
}

.album-items-list-item__description__used {
  font-size: 10px;
  text-transform: uppercase;
  color: $color-pure-white;
  background-color: $color-darker-grey;
  padding: 1px 2px;
  border-radius: 1px;
}

.album-items-list-item__price {
  font-size: 10px;
  flex: 0 1 40%;
  align-self: center;
  text-align: right;
}

.album-items-list-item__price__amount {
  font-size: 16px;
  font-weight: 500;
  padding-bottom: $album-items-list-item__price__amount-padding-bottom;
}

@media (max-width:767px) {
  .album-items-list-item {
    max-width: 100%;
  }
}

@media (min-width:768px) {
  .album-items-list-item {
    max-width: 50%;
  }
}

@media (min-width:992px) {
  .album-items-list-item {
    max-width: 33%;
  }
}

@media (min-width:1200px) {
  .album-items-list-item {
    max-width: 33%;
  }
  .album-items-list-item__info {
    flex-direction: column;
  }
  .album-items-list-item__description {
    align-self: auto;
  }
  .album-items-list-item__price {
    padding: $album-items-list-item__description-padding;
    align-self: auto;
    text-align: left;
    display: flex;
    flex-direction: column-reverse;
  }
  .album-items-list-item__price__amount {
    padding-bottom: 0;
    padding-top: $album-items-list-item__price__amount-padding-bottom;
  }
  .album-items-list-item__description__artist {
    // font-weight: $font-weight-medium;
  }
}
</style>
