import Vue from "vue"
import Vuex from "vuex"
import router from "./router" // router.js를 불러온다
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data() 같이 정보를 저장
    userInfo: null,
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: 2, name: "broza", email: "broza@gmail.com", password: "123456" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // state를 변화시키는 로직
    // 로그인이 성공했을 떄,
    loginSucces(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload // payload로 보낸 selectedUser를 받는다
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      // 로그아웃을 누르면 초기값으로 돌려보낸다
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    //로그인 시도
    login({ commit }, loginObj) {
      // {} 안에 값은 store의 값?
      // commit = mutations를 실행시키기 위한 인자
      axios
        .post("https://reqres.in/api/login", loginObj)
        // eslint-disable-next-line prettier/prettier
    .then(res => {
          // 성공시 token: 값이 돌아온다
          //토큰을 헤더에 포함시켜서 유저정보를 요청
          let token = res.data.token
          let config = {
            headers: {
              "access-token": token
            }
          }
          axios
            .get("https://reqres.in/api/users/2", config)
            .then(response => {
              let userInfo = {
                id: response.data.data.id,
                first_name: response.data.data.first_name,
                last_name: response.data.data.last_name,
                avata: response.data.data.avata
              }
              commit("loginSucces", userInfo)
            })
            .catch(error => {
              alert("이메일과 비밀번호를 확인하세요")
              console.log(error)
            })
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // let selectedUser = null
      // state.allUsers.forEach(user => {
      //   //allUsers 안의 user들을 반복해서 찾는다
      //   if (user.email === loginObj.email) selectedUser = user
      // }) // 만약 user의 이메일값과 로그인폼의 email이 같다면 selected User에 유저의 정보를 삽입한다
      // if (selectedUser === null || selectedUser.password !== loginObj.password)
      //   // selectedUser가 null이거나  그의 패스워드가 로그인폼에 입력된것과 다르다면
      //   commit("loginError")
      // //loginError를 커밋
      // else {
      //   commit("loginSucces", selectedUser) // 그렇지 않다면 loginSucces를 커밋하고 payload로 selectedUser를 보낸다
      //   router.push({ name: "mypage" }) // mypage로 보낸다
      // }
    },
    logout({ commit }) {
      // logout이 호출되면
      commit("logout") // 뮤테이션 logout를 커밋하고
      router.push({ name: "home" }) // home으로 보낸다
    }
  }
})
