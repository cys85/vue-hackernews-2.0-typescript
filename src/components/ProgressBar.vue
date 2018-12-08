<!-- borrowed from Nuxt! -->

<template>
  <div class="progress" :style="{
    'width': percent+'%',
    'height': height,
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProgressBar extends Vue {
  public percent = 0;
  public show = false;
  public canSuccess = true;
  public duration = 3000;
  public height = '2px';
  public color = '#ffca2b';
  public failedColor = '#ff0000';
  public _timer: any;
  public _cut: any;
  public start() {
      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random());
        if (this.percent > 95) {
          this.finish();
        }
      }, 100);
      return this;
    }
    public set(num: number) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    }
    public get() {
      return Math.floor(this.percent);
    }
    public increase(num: number) {
      this.percent = this.percent + Math.floor(num);
      return this;
    }
    public decrease(num: number) {
      this.percent = this.percent - Math.floor(num);
      return this;
    }
    public finish() {
      this.percent = 100;
      this.hide();
      return this;
    }
    public pause() {
      clearInterval(this._timer);
      return this;
    }
    public hide() {
      clearInterval(this._timer);
      this._timer = null;
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    }
    public fail() {
      this.canSuccess = false;
      return this;
    }
}
</script>

<style lang="less" scoped>
.progress {
   position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
}
</style>
