<template>
  <div>
    유저 번호 : {{userId}}
  <v-btn @click="edit" small>수정</v-btn>
  </div>
</template>

<script>
export default {
  computed:{
    userId() {
      return this.$route.params.id
    }
  },
methods: {
  edit() {
    // this.$router.push({name:'users-edit'})
    this.$router.push({path:`${this.userId}/edit`})
  }
}
}
</script>

<style>
  
</style>