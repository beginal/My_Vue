<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}"> 
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin === false" router :to="{name: 'login'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>로그인</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else  router :to="{name: 'mypage'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>마이페이지</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <v-menu offset-y v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
          flat
          icon
        >
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile router :to="{name: 'mypage'}">
          <v-list-tile-title>마이페이지</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$store.dispatch('logout')">
          <v-list-tile-title>로그아웃</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-btn flat v-else router :to="{name: 'login'}">로그인</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
      <router-view/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex' // vuex에서 관리하는 mapState를 불러온다
  export default {
    data: () => ({
      drawer: null
    }),
    computed: {
...mapState(["isLogin"]) 
// store.js에 저장된 isLogin을 state를 불러온다
// vuex 사용시에는 앞에 ...추가
    },
    props: {
      source: String
    }
  }
</script>