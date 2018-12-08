<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home1</router-link> |
      <router-link to="/about">About1</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
}
</script>


<style lang="less">
@import url('./assets/less/index.less');
// @import url('vant/lib/index.css');
#app {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
