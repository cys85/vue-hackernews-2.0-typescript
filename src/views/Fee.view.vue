<template>
  <main-layout>
    <section class="fee" slot="body">费用</section>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/MainLayout.vue';
@Component({
  components: {
    MainLayout
  },
  // asyncData() {
  //   return Promise.resolve([]);
  // },
})
export default class FeeView extends Vue {
}
</script>
