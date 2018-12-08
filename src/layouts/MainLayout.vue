<template>
  <section class="main-layout">
    <!-- <header></header> -->
    <div class="main-layout__body">
      <router-view />
    </div>
    <footer></footer>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class MainLayout extends Vue {
}
</script>


<style lang="less" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;

  &__body {
    flex-grow: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
  }
  footer {
    padding-bottom: 0;
    box-sizing: content-box;
    height: 100px;
    background-color: #fe2c55;
    border-top: 1px solid rgba(22,24,35,.2);
  }
}
</style>
