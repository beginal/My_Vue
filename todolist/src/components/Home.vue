<template>
  <v-container>
    <v-layout row wrap>
     <v-flex xs12 text-xs-center>
        <h1>투두 리스트</h1>
      <p>전체 {{ todoList.length }}: / 완료 : {{countDone}} 잔여 : {{todoList.length- countDone}}</p>
     </v-flex>
      <v-flex xs6 pa-2>
        <List
        :todoList="todoList"
        @statusControl="statusControl"
        @listDelete="listDelete"
        @listEdit="listEdit"
        />      
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd
        @listAdd="listAdd"
        @listEdit="listEdit"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import List from './List'
import ListAdd from './Listadd'

export default {
  data () {
    return {
      todoList:[]
    }
  },
  computed: {
    countDone() {
      let count = 0
      this.todoList.forEach(list => {
        if( list.status === 'done') count++
      })
      return count
    }
  },
  components: {
    List,
    ListAdd
  },
  methods: {
    listAdd(memo) {
      this.todoList.push({memo:memo,status:'created'})
    },
    statusControl(index,status) {
      this.todoList[index].status = status
    },
    listDelete(index) {
      this.todoList.splice(index,1)
    },
    listEdit(memo,index) {
      this.todoList[index].memo = memo
    }
  }
}
</script>

<style>
  
</style>