<template>
  <main-layout>
    <section class="order" slot="body">下单</section>
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
export default class OrderView extends Vue {
}
</script>
