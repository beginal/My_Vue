import Vue from "vue"
import Router from "vue-router"
import store from "./store"
Vue.use(Router) // Vue에서 router를 사용하겠다 (1~4줄)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //이미 로그인 된 유저니까 막아야 함
    alert("이미 로그인 하셧습니다")
    next("/")
  } else {
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    //아직 로그인되지 않은 유저니까 막아야 함
    alert("로그인이 필요한 기능입니다.")
    next("/login")
  } else {
    next()
  }
}
export default new Router({
  mode: "history", // 히스토리 모드 사용
  base: process.env.BASE_URL, // 앱의 기본 url
  routes: [
    // url에 따라 라우트 할 컴포넌트를 지정
    {
      path: "/", // 주소표시줄  값
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue") // 레이지 모드 사용해서 불러오기
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser, // 입력 전 rejectAuthUser 먼저 실행
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser, // 입력 전 onlyAuthUser 먼저 실행
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Mypage.vue")
    }
  ]
})
