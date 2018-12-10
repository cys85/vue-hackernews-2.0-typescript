<template>
  <main-layout>
    <section class="waybill" slot="body">运单</section>
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
export default class WaybillView extends Vue {
}
</script>
