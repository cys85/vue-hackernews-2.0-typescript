import { State } from "./interface";
import { RootState } from '../interface';

const state = (): State => ({
  tabbar: [
    {
      path: '/home',
      name: '首页',
      normalIcon: 'icon-shouye',
      activeIcon: 'icon-shouyefill'
    },
    {
      path: '/order',
      name: '下单',
      normalIcon: 'icon-ziyouanpai',
      activeIcon: 'icon-ziyouanpai'
    },
    {
      path: '/waybill',
      name: '运单',
      normalIcon: 'icon-listview',
      activeIcon: 'icon-listview'
    },
    {
      path: '/fee',
      name: '费用',
      normalIcon: 'icon-qian',
      activeIcon: 'icon-qian'
    },
    {
      path: '/my',
      name: '我的',
      normalIcon: 'icon-geren',
      activeIcon: 'icon-geren'
    },
  ]
})

const getters = {
  // tabar 选中第几个
 tabbarActive (state: State, getters: any, rootState: RootState) {
  return state.tabbar.findIndex(item => {
    const exp = new RegExp(`^${item.path}`)
    return exp.test(rootState.route.fullPath)
  })
 }
}



export const app = {
  namespaced:  true,
  state,
  getters
  
}