<template>
  <div class="score">
    <button v-for="button in buttons" :key="button.scroe"  @click="updateScore(button.score)" :class="{'active':button.score === item.score}">
        {{ button.label }} 
    </button>
  </div>
</template>

<script>

export default {
  name: 'Score',

  methods:{
    updateScore(score) {
        this.$emit('onUpdateScore', this.item, score);
    }
  },
  computed : {},
  data() {
      return{
        buttons: [
          {label: 'GOOD', score: 3},
          {label: 'SOSO', score: 2},
          {label: 'BAD', score: 1}
        ]
      }
  },

  props: [
      'item'
  ]

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
