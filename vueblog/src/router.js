import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 모듈 import
Vue.use(Router) // 라우터 사용
//Lazy-loaded를 위한 상수

const About = () => {
    return import(/* webpackChunkName: "about */ './views/About')
} 

export default new Router({
  mode: 'history', // 해시태그 제거
  base: process.env.BASE_URL,
  routes: [
      // 객체 형태로 라우터가 존재한다
    {
      path: '/', //주소
      name: 'home', //라우터 이름
      component: Home //주소에 뿌려줄 컴포넌트
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* 기본적으로  Vue.js를 활용해 만든 페이지는 SPA이므로 한 페이지에서 모든 작업이 일어난다 */
      /* 어떤 값이 입력되었을 때 이 값에 해당하는 것만 가져오겠다. lay-loaded */
      component: () => About()
    }
  ]
})
