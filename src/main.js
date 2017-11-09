// babel-polyfill一定要写在最开始的位置，就可以对ES6 API 进行转译
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

// console.log('使用移动端的控制台调试工具')

// 解决移动端点击300ms延迟问题
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
 // render函数是渲染一个视图，然后提供给el挂载，其实这只是简写的方式。如果不涉及使用this的话等价于：
 // render: function (h) {
 //   return h(App)
 // }
  render: h => h(App)
})
