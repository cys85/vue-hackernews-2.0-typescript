

<script lang="ts">
/*
 * @Author:  chen Yusheng
 * @Description 导航栏
 *
 * @param {string} title - 标题
 * @param {string} left-text - 左侧文案, 默认：返回
 * @param {function} click-left - 左侧按钮事件，默认初始路由 go(-1) 返回
 * @param {function} click-right - 右侧按钮事件
 *
 * @param {slot} left - 自定义左侧区域内容
 * @param {slot} title - 自定义标题
 * @param {slot} right - 自定义右侧区域内容
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import { NavBar as VanNavBar } from 'vant';

@Component({
  components: {
    VanNavBar,
  },
})
export default class NavBar extends Vue {
  @Prop(String)
  private title!: string; // 标题

  @Prop({
    default: '返回',
  })
  private leftText!: string; // 左侧文案

  @Prop()
  private clickLeft!: () => void;

  @Prop()
  private clickRight!: () => void;

  /**
   * 左侧按钮事件
   */
  private onClickLeft() {
    if (typeof this.clickLeft === 'function') {
      this.clickLeft();
    } else {
      this.$router.go(-1);
    }
  }

  /**
   * 右侧按钮事件
   */
  private onClickRight() {
    if (typeof this.clickRight === 'function') {
      this.clickRight();
    }
  }

}
</script>


<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight" >
    <template slot="left">
      <slot name="left" />
    </template>
    <template slot="title">
      <slot name="title" />
    </template>
    <template slot="right">
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>