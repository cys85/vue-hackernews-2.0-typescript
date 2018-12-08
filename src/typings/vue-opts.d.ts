import { Store } from 'vuex';
import VueRouter, { Route } from 'vue-router';
import Vue from 'vue';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: (options: {store: Store<any>, route: Route}) => Promise<any>;
  }
}
