import About from './components/About'
import Home from './components/Home'
import News from './components/News.vue'
import Message from './components/Message.vue'
import MessageDetail from './components/MessageDetail.vue'

/*
 暴露模块时是对象还是函数?
 如果只有一个行为-->函数
 如果有多个行为--->对象
 */
export default function (router) {
  router.map({
    '/about': {
      component: About
    },
    '/home': {
      component: Home,
      subRoutes: {
        '/news': {
          component: News
        },
        '/message': {
          component: Message,
          subRoutes: {
            '/detail/:id': {
              component: MessageDetail
            }
          }
        }
      }
    }
  })
}
