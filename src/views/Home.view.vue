<template>
  <section class="home">首页</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import { getTest } from '@/api';
import { of, Observable } from 'rxjs';

@Component({
  // components: {
  //   HelloWorld,
  // },
  asyncData() {
    const toPromise = (obs: any) =>
      new Promise((resolve, reject) => {
        obs.subscribe({
          complete: resolve,
          error: reject
        });
      });
    console.log(toPromise(of(() => getTest())))
    return Promise.resolve([]);
  },
})
export default class HomeView extends Vue {
}
</script>
