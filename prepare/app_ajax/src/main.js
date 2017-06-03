import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/App1'

//使用插件
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
