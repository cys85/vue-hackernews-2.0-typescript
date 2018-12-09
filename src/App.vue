<template>
  <div id="app">
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
#app {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
