import { State } from "./interface";

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
  ],
  tabbarActive: 0,
})

export const app = {
  namespaced:  true,
  state
}