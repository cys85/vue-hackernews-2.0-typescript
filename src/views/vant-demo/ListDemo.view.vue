<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { List as VanList, Cell as VanCell } from 'vant';
import MainLayout from '@/layouts/MainLayout.vue';
import NavBar from '@/components/NavBar';

@Component({
  components: {
    VanList,
    VanCell,
    MainLayout,
    NavBar,
  },
})
export default class ListDemo extends Vue {
  public list: any[] = [];
  public loading = false;
  public finished = false;
  public onLoad() {
    // 异步更新数据
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 500);
  }
}
</script>

<template>
  <main-layout>
    <nav-bar slot="header" title="List" />
    <section class="nav-bar-demo" slot="body">
      <!-- body -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </van-list>
    </section>
  </main-layout>

</template>