<template>
  <div class="landing">
    <div class="landing__hero">
      <h1 class="landing__title">Trevor</h1>
      <p class="landing__motto">Your music dealer</p>
      <form @submit.prevent="handleSubmit">
        <input
          :focus="true"
          class="landing__search-input"
          placeholder="Search..."
          v-model="query"/>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    handleSubmit (event) {
      this.$router.push({
        name: 'search',
        query: { query: this.query }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.landing {
  background: $color-blue;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  &__hero {
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 16% 16px;
  }

  &__title {
    @include font-logo;
    font-size: 2.5em;
    margin: 4px 0;
    color: $color-white;
    text-align: center;
  }

  &__motto {
    @include font-base;
    text-transform: uppercase;
    letter-spacing: $letter-spacing;
    margin: 4px 0;
    color: $color-white;
    text-align: center;
  }

  &__search-form {
    margin: 16px 0;
  }

  &__search-input {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
