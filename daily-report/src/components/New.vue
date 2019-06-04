<template>
  <div class="hello">
    <h1> {{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'New',

  methods:{},
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
