<template>
  <div class="home">
    23223
    <img alt="Vue logo" src="../assets/images/logo2.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  // asyncData() {
  //   return Promise.resolve([]);
  // },
})
export default class Home extends Vue {
}
</script>
