<template lang="html">
  <img :class="classes" :src="src" :alt="alt">
</template>

<script>
import defaultImage from 'assets/images/default.png'
import artistImage from 'assets/images/default_artist.png'
import albumImage from 'assets/images/default_album.png'
const types = ['default', 'artist', 'album']

export default {
  name: 'trevor-image',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (type) => types.includes(type)
    },
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        'trevor-image',
        `trevor-image_${this.type}`
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

@mixin default-image ($default-image) {
  background-image: url(#{$default-image});
  background-repeat: no-repeat;
  background-size: 100%;
  text-indent: -99999999px; // remove the browser broken url image
}

.trevor-image {
  display: block;

  &_default {
    @include default-image ('/dist/default.png');
  }

  &_artist {
    @include default-image ('/dist/default_artist.png');
    border-radius: 100%;
  }

  &_album {
    @include default-image ('/dist/default_album.png');
  }
}
</style>
