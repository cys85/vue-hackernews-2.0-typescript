<template>
  <div class="about">
    <h1>This is an about page22</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  asyncData() {
    return Promise.resolve([]);
  },
})
export default class About extends Vue {
}
</script>