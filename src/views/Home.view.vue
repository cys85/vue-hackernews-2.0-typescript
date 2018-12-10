<template>
  <section class="home">首页{{data}}</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import { getTest } from '@/api';
import { of, Observable } from 'rxjs';

const home = namespace('home')

@Component({
  // components: {
  //   HelloWorld,
  // },
  asyncData({store, route}) {
    return store.dispatch('home/getTest')
  },
})
export default class HomeView extends Vue {
  @home.State('data') data!: any
}
</script>
