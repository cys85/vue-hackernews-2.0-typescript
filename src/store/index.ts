import Vue from 'vue';
import Vuex from 'vuex';
import { Store } from 'vuex';
import { app } from './app';
import { home } from './home';

Vue.use(Vuex);

export function createStore (): Store<any> {
  return new Vuex.Store({
    modules: {
      app,
      home
    },
  });
};

