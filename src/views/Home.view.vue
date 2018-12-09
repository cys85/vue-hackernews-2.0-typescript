<template>
  <section class="home">首页</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import { getTest } from '@/api';

@Component({
  // components: {
  //   HelloWorld,
  // },
  asyncData() {
    return getTest()
  },
})
export default class HomeView extends Vue {
}
</script>
