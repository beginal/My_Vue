import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Exam',
      component: () => import('./components/Example')
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: () => import('./components/TodoPage')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
