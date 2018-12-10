
<script lang="ts">
/*
 * @Author:
 * @Description
 */
import { Component, Vue } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import { getTest } from '@/api';
import MainLayout from '@/layouts/MainLayout.vue';

const ex = namespace('ex');

@Component({
  components: {
    MainLayout,
  },
  asyncData({store, route}) {
    return store.dispatch('ex/getTest');
  },
})
export default class ExView extends Vue {
  @ex.State('data') public data!: any;
}
</script>

<template>
  <main-layout>
    <section class="ex" slot="body">样例</section>
  </main-layout>
</template>

