<template>
  <section class="main-layout">
    <!-- <header></header> -->
    <div class="main-layout__body">
      <router-view />
    </div>
    <div class="main-layout__footer-warp">
      <footer>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="shop">标签</van-tabbar-item>
          <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
          <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
          <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
        </van-tabbar>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Tabbar, TabbarItem } from 'vant';

@Component({
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  }
})
export default class MainLayout extends Vue {
  active = 0
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
  &__footer-warp {
    position: relative;
  }
  footer {
    padding-bottom: 0;
    box-sizing: content-box;
    height: 51px;
    background-color: #fff;
    // border-top: 1px solid rgba(22,24,35,.2);
  }
}
</style>
