import Vue from 'vue'
import vueResouce from 'vue-resource'

import App from './components/App'

// 声明使用插件 --->所有组件对象都多了一个属性: $http
Vue.use(vueResouce)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
