import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css' /*引进 基础样式  通用  控制 标签元素 */

import './assets/js/font' //页面的布局

import './plugins/element-ui' //引入element-ui

import './plugins/axios' //引入axios 全局 还没有拦截器

import router from './plugins/router' //引入router

import server from './config/server.js';


// import store from './plugins/vuex.js' //引入vuex
new Vue({
  render: h => h(App),
  router
  // store
}).$mount('#app')
