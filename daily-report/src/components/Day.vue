<template>
  <div class="day">
      <h1 class="day-title">
        {{ $route.params.date }}
      </h1>

      <ul class="day-list">
        <li v-for="item in items" :key="item.id" class="day-list-item" :class="{'open' : item.open}">
           <div class="time">
             <h2>
               {{ item.id }}
             </h2>
           </div>

          <div class="action">
            <p v-if="!item.open" @click="toggleOpen(item)">
              {{item.action}}
              <span v-if="item.action.length === 0">내용을 작성해주세요.</span>
            </p>
            <input v-if="item.open" type="text" v-model="item.action" @keyup.enter="updateItem(item)" placeholder="한 일을 작성해주세요.">
          </div>

          <day-score @onUpdateScore="onUpdateScore" :item="item">
              
          </day-score>

          <div class="note" v-if="item.open">
            <textarea v-model="item.note" @keyup.enter="updateItem(item)" placeholder="노트를 작성해주세요."> </textarea>
          </div>

          <div class="buttons">
            <button class="save" @click="updateItem(item)">
              저장
            </button>
            <button class="cancel" @click="toggleOpen(item)">
              취소
            </button>
          </div>

        </li>
      </ul>
  </div>
</template>

<script>
import DayScore from './DayScore'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Day',

  components : {
    DayScore
  },

  methods:{
    onUpdateScore(item, score) {
        item.score = score;
        this.updateItem(item);
    },

    getItems() {
      let url = `https://new-daily-report-34671.firebaseio.com/items.json?orderBy="$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-24"`;

      axios.get(url).then((res) => {
        this.items = this.displayItems(res.data);
      });
    },

    displayItems(result) {
        // console.log(result);
        let items = [];
        let startTime = '08:00'; // 시작 시간

        for (let i=0; i < 12; i++) {
            let datetime = moment(this.$route.params.date+ ' ' + startTime);
            let itemKey = `${this.$route.params.date}-${datetime.add(i*2, 'hours').format('HH')}-${datetime.add(2, 'hours').format('HH')}`;

            let item = {
              id: itemKey,
              action : '',
              note: '',
              score: undefined
            }
            
            Object.keys(result).map((key) => {
                if(key === itemKey) {
                  item = result[key]
                }
            });

            items.push(item);
        }

        return items;

    },

    updateItem(item) {
        console.log('update', item);
        let url = `https://new-daily-report-34671.firebaseio.com/items/${item.id}.json`;        
        axios.put(url, item).then((res) => {
            this.getItems();
        });
    },

    toggleOpen(item) {
        item.open = !item.open;
    }

  },
  computed : {},
  data() {
      return{
        items : []
      }
  },

  props: { },

  created() {
    this.getItems();
  },

  watch: {
    '$route' (to, from) {
      this.getItems();
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
