<template>
  <main-layout>
    <section class="my" slot="body">我的</section>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/MainLayout.vue';
@Component({
  components: {
    MainLayout,
  },
  // asyncData() {
  //   return Promise.resolve([]);
  // },
})
export default class MyView extends Vue {
}
</script>
