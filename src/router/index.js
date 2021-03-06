import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>(require(["@/components/index"],resolve))
    },
    {
      path: '/weather',
      name: 'weather',
      component: resolve=>(require(["../public-component/Li-weather"],resolve))
    }
  ]
})
