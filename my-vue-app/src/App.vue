<script setup>

import HelloWorld from './components/HelloWorld.vue';

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  <v-icon icon="fas fa-plus" /> // This renders a FontAwesome icon
  <v-icon icon="mdi-minus" /> // This renders a MDI icon
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style>
  @import url('./fonts/material-icons.min.css');
  /* @import url('./fonts/MaterialIcons-Regular.woff'); */
  /* @import url('./fonts/MaterialIcons-Regular.woff2'); */
@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(MaterialIcons-Regular.eot);src:local('Material Icons'),local('MaterialIcons-Regular'),url(MaterialIcons-Regular.woff2) format('woff2'),url(MaterialIcons-Regular.woff) format('woff'),url(MaterialIcons-Regular.ttf) format('truetype')}.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga'}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
