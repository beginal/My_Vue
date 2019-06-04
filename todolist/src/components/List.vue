<template>
  <div>
    <v-card
    class="pa-3 mb-3"
    :class="{'done': list.status === 'done'}"
    v-for="(list,index) in todoList"
    :key="index">
     <p>{{list.memo}}</p>
     <v-btn 
     v-if="list.status === 'created'"
     @click="$emit('statusControl', index, 'done')"
     fab small flat color="green"><i class="material-icons">
check
</i></v-btn>
     <v-btn
     v-else
     @click="$emit('statusControl', index, 'created')"  
      fab small flat color="blue"><i class="material-icons">
refresh
</i></v-btn>
     <v-btn
     @click="$emit('listDelete',index)"
      fab small flat color="red"><i class="material-icons">
restore_from_trash
</i></v-btn>
<v-btn
      @click="listEdit(list.memo,index)"
      v-if="list.status !== 'done'"
      fab small flat color="yellow"><i class="material-icons">
edit
</i></v-btn>
    </v-card>
  </div>
</template>

<script>
import {eventBus} from "../main"
export default {
  data () {
    return {
      
    }
  },
  props: ["todoList"],
  methods: {
listEdit(memo,index) {
  eventBus.listEdit(memo,index)
}
  }
}
</script>

<style scoped>
.done {
  background: rgba(124, 124, 124, 0.336);
}
.done p {
  color: gray;
  text-decoration: line-through;
}
</style>