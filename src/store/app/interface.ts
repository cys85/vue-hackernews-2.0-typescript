

export type AppTabbar = {
  path: string,
  name: string,
  normalIcon: string, // 未选中图标
  activeIcon: string // 选中图标
}[]

export interface State {
  tabbar: AppTabbar,
}