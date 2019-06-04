<template>
<div>
  <v-textarea
    outline
    v-model="memo"
    label="할 일을 입력해주세요."
    value=""
  ></v-textarea>
  <v-btn v-if="mode === 'add'" @click="listAdd">추가</v-btn>
  <v-btn v-else @click="listEdit">수정</v-btn>
</div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data () {
    return {
      memo : null,
      index: null,
      mode: "add"
    }
  },
  created() {
eventBus.$on("listEdit",(memo,index) => {
  this.memo = memo
  this.index = index
  this.mode = "edit"
})
  },
  methods: {
    listAdd() {
      console.log("추가했오")
      if (this.memo === null) {
        alert("할 일을 입력해주세요.")
      } else {
        this.$emit("listAdd", this.memo)
        this.memo = null
      }
    },
    listEdit() {
      if(this.memo == null){
        alert("할 일을 입력해주세요.")
      } else {
        this.$emit("listEdit", this.memo,this.index)
        this.memo = null
        this.mode = "add"
      }
    }
  }
}
</script>

<style>
  
</style>