<template>
<v-app id="inspire">
  <!-- 열고 닫는 서랍식 -->
  <v-navigation-drawer
  v-model="drawer"
  fixed
  app>
  <v-list dense>
    <!-- <v-list-title @click="$router.push({path: '/'})">  -->
    <!-- <v-list-title @click="$router.push('/')">  -->
    <v-list-tile @click="$router.push({name: 'home'})">
      <v-list-tile-action>
        <i class="fas fa-home"></i>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile>Home</v-list-tile>
      </v-list-tile-content>
    </v-list-tile>
    <!-- <v-list-title @click="$router.push({path: '/about'})">  -->
    <!-- <v-list-title @click="$router.push('about')">  -->
    <v-list-tile @click="$router.push({name: 'about'})">
      <v-list-tile-action>
        <i class="fas fa-user"></i>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile>About</v-list-tile>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  </v-navigation-drawer>
  
</v-app>
<!-- <v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <User></User>
        </v-flex>
    </v-layout>
</v-container> -->
</template>

<script>
import User from './components/User.vue'
export default {
    components: {
        User
    },
}
</script>