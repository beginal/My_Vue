<template>
  <v-container file-height style="max-width:450px">
    <v-layout align-center row wrap>
      <v-flex>
        <v-alert
        class="mb-3"
      :value="isLoginError"
      type="error"
    >
     아이디와 비밀번호를 확인해주세요
    </v-alert>
    <v-alert
      :value="isLogin"
      type="success"
    >
     로그인이 완료되었습니다.
    </v-alert>
        <v-card>
          <v-toolbar flat>
    <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
         <v-text-field
            v-model="email"
            label="E-mail을 입력하세요"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="password를 입력하세요"
          ></v-text-field>
          <v-btn 
          large block depressed color="primary"
          @click="login({email,password})"
          >로그인</v-btn>
          <!-- <v-btn @click="test">테스트</v-btn>
          <v-btn @click="postTest">테스트</v-btn> -->
          </div>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex" 
// sotre.js의 state,action 불러오기
import axios from "axios"

export default {
  data () {
    return {
      email: null,
      password: null,
      }
  },
  computed: {
    ...mapState(["isLogin","isLoginError"])
// store.js에 저장된 isLogin과 isLoginError state를 불러온다
  },
  methods: {
    ...mapActions(["login"]),
// store.js에 저장된 Login이라는 actions을  불러온다  
// test() {
// axios
//   .get('https://reqres.in/api/')
//   .then(res => {
//     // handle success
//     console.log(res);
//   })
//   .catch(err => {
//     // handle error
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("test");
//     // always executed
//   });
// },
// postTest() {
//   axios.post('https://reqres.in/api/register', {
//     "email": "eve.holt@reqres.in"
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }
  }
}
</script>

<style>
  
</style>