// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入初始化样式
import 'styles/reset.css'
// 解决移动端 1px 样式问题
import 'styles/border.css'

import 'styles/iconfont.css'
// 解决移动端点击 300ms 延迟问题
import fastClick from 'fastclick'

// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'babel-polyfill'

import store from './store/index'
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
