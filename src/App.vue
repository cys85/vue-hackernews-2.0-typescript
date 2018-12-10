<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <MainLayout /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/MainLayout.vue';
@Component({
  components: {
    MainLayout
  }
})
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
