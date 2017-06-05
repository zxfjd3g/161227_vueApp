import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import routeConfig from './routeConfig'

//声明使用插件
Vue.use(VueRouter)

//1. 创建路由器对象
var router = new VueRouter({
  linkActiveClass: 'active',  // 指定当前链接的class
  history: true   // 去掉#!
})

//2. 映射路由
routeConfig(router)

//3. 启动应用
router.start(App, '#demo')

//4. 初始请求指定路由
router.go('/about')

