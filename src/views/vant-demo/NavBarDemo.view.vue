<template>
  <main-layout>
    <nav-bar slot="header" title="NavBar" />
    <section class="nav-bar-demo" slot="body">
      <!-- body -->
      <div v-for="i in 100" :key="i">{{i}}</div>
    </section>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import MainLayout from '@/layouts/MainLayout.vue';
import NavBar from '@/components/NavBar';

@Component({
  components: {
    MainLayout,
    NavBar,
  },
})
export default class NavBarDemo extends Vue {}
</script>
