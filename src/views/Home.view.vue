<template>
  <main-layout>
    <nav-bar slot="header" title="标题" >
      <span slot="title">232323</span>
    </nav-bar>
    <section class="home" slot="body">首页{{data}}</section>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import { getTest } from '@/api';
import { of, Observable } from 'rxjs';
import MainLayout from '@/layouts/MainLayout.vue';
import NavBar from '@/components/NavBar';

const home = namespace('home');

@Component({
  components: {
    MainLayout,
    NavBar,
  },
  asyncData({store, route}) {
    return store.dispatch('home/getTest');
  },
})
export default class HomeView extends Vue {
  @home.State('data') public data!: any;
}
</script>
