import { State } from "./interface";
import { RootState } from '../interface';
import { getTest } from '@/api';
import { Dispatch, Commit } from 'vuex';

const state = (): State => ({
  data: []
})

const mutations = {
  AA(state: State, playload: any) {
    state.data = playload
  }
}

const actions = {
  async getTest(context: {commit: Commit,state: State, rootState: RootState}, playload: any) {
    const data = await getTest({
      __cookies__: context.rootState.cookies
    }).toPromise()
    context.commit('AA', data.purchaseinorder_list)
    // console.log(data);
  }
}

export const home = {
  namespaced:  true,
  state,
  actions,
  mutations
}