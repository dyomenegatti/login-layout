<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/style.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: $font-main;
}

body {
    background: $color-linear;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
