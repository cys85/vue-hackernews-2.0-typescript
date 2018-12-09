'use strict'
const version = require('../package.json').version
module.exports = {
  NODE_ENV: '"production"', // 生产环境
  APP_NAME: '"feok-H5 前端模板"', // APP名称
  ROUTER_MODE: '"history"', // 路由模式
  ROUTER_BASE: '"/"', // 路由应用的基路径
  BASE_API_URL: '""', // API的基础URL
  BASE_IMAGE_URL: '', // 图片的基础URL
  AJAX_TIMEOUT: '30000', // ajax超时时间
  COMPONENT_THEME: '"default"', // UI 组件 皮肤
  STORAGE_NAMESPACE: '""', // 前端缓存命名空间
  TOKEN_PATTERN: '""', // token 的存储模式
  VERSION: `"${version}"` // 系统版本号
}
