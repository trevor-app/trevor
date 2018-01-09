<template>
  <div class="app">
    <div class="app-header">
      <div class="app-header__container">
        <div class="app-header__title">
          <router-link :to="{ path: '/'}">Trevor</router-link>
        </div>
        <div class="app-header__content">
          <router-view name="header"></router-view>
        </div>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

$app-header-size: 5px;

body {
  margin: 0;
}

.app-content {
  width: 100%;
}

.app-header {
  padding: $app-header-size 0;
}

.app-header__container {
  max-width: $container-max-width;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.app-header__content {
  width: 100%;
}

.app-header {
  background-color: $color-dark-side-grey;
  &__title {
    @include font-logo;
    padding: 10px 5px;
    font-size: 1.25em;
    align-self: flex-start;
    a {
      color: $color-lightest-grey;
      text-decoration: none;
    }
  }
}

@media (min-width:768px) {
  .app-header {
    padding: $app-header-size;
  }
  .app-header__container {
    flex-direction: row;
    justify-content: space-between;
  }
  .app-header__title {
  }
  .app-header__content {
    width: 30%;
  }
}
</style>
