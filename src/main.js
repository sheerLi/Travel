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
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
