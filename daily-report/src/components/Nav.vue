<template>
  <nav class="nav">
    <ul class="nav-list">
        <li>
            <button @click="today">
                <i class="xi-home"></i>
                <span>오늘</span>     
            </button>
        </li>       
        <li>
            <router-link to="/calendar">
                <i class="xi-calendar"></i>
                <span>달력</span>
            </router-link>
        </li>
        <li>
            <router-link to="/setting">
                <i class="xi-cog"></i>
                <span>설정</span>
            </router-link>
        </li>                
        <li>
            <router-link to="/about">
                <i class="xi-message"></i>
                <span>소개</span>
            </router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Nav',
  methods:{
      today() {
         let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
        //  console.log(todayUrl);
        this.$router.push(todayUrl);

      }
  },
  computed : {},
  data() {
      return{
      }
  },

  props: {
      msg: String
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
