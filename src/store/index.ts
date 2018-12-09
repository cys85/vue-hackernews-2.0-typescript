import Vue from 'vue';
import Vuex from 'vuex';
import { Store } from 'vuex';
import { app } from './app';

Vue.use(Vuex);

export function createStore (): Store<State> {
  return new Vuex.Store({
    modules: {
      app
    },
  });
};

export interface Item {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>,
  score: number;
  time: number | Date | undefined;
  title: string;
  type: string;
  url: string;
  __lastUpdated: number | Date | undefined;
};

export interface User {
  created: number;
  id: string;
  karma: number;
  submitted: Array<number>;
  __lastUpdated: number;
};

export interface List {
  top: Array<number>;
  new: Array<number>;
  show: Array<number>;
  ask: Array<number>;
  job: Array<number>;
  [key: string]: Array<number>;
};

export interface State {
  activeType: string | null;
  itemsPerPage: number;
  items: any;
  users: any;
  lists: List;
  route?: any;
};
