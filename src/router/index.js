import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slot from '@/page/slot/TopView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    }
  ]
})
