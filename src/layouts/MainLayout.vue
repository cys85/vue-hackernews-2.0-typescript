<template>
  <section class="main-layout">
    <!-- <header></header> -->
    <div class="main-layout__body">
      <router-view />
    </div>
    <div class="main-layout__footer-warp">
      <footer>
        <van-tabbar 
          :value="tabbarActive">
          <van-tabbar-item
            v-for="tab in tabbar" 
            :key="tab.path"
            :to="tab.path" >
            <span>{{tab.name}}</span>
            <i
              class="iconfont"
              :class="[
                props.active ? tab.activeIcon : tab.normalIcon,
                props.active ? 'activeIcon' : 'normalIcon'
              ]"
              slot="icon"
              slot-scope="props" />
          </van-tabbar-item>
        </van-tabbar>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Tabbar, TabbarItem } from 'vant';
import { namespace } from 'vuex-class';
import { AppTabbar } from '@/store/app/interface';

const app = namespace('app')

@Component({
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  }
})
export default class MainLayout extends Vue {
  @app.State('tabbar') tabbar: AppTabbar
  @app.Getter('tabbarActive') tabbarActive: number
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

  // icon

  .iconfont {
    font-size: 20px
  }

  .activeIcon {
    color: #1989fa;
  }
  .normalIcon {

  }
}
</style>
