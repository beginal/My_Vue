<template>
  <div class="hello">
    <h1> {{ msg }} </h1>

    <new
      :msg = "msg"
    ></new>

    <!-- 텍스트 박스 -->
    <input type="text" v-model="msg" placeholder="입력하세요.">

    <!-- 체크박스 -->
    <input type="checkbox" v-model="seen">
    <p v-if="seen"> 활성 </p>
    <p v-else> 비활성 </p>

    <!-- 라디오  -->
    <input type="radio" v-model="age" value="30">
    <input type="radio" v-model="age" value="20">
    <input type="radio" v-model="age" value="10">

    <p> {{ age }} </p>

    <!-- 셀렉트 -->
    <select v-model="age">
        <option value="30">30세</option>
        <option value="20">20세</option>
        <option value="10">10세</option>
    </select>

  </div>
</template>

<script>
import New from './New';

export default {
  name: 'HelloWorld',

  components : {
      New
  },

  // 이벤트
  methods: {
    updateScore(score) {
      console.log('update', score);
      this.score = score;
    },
    keyup() {
      console.log('key');
    }
  },

  computed : {
    today() {
      let date = new Date();
      return date.getDate();
    }
  },

  // 데이터
  data() {
    return {     
      score:0,
      msg : '힝힝힝!',
      author : '밥 아저씨',
      age : 10,
      article : '<strong>hello world!!</strong>',
      info : {
                job : 'developer',
                marry : 'not marry'
             },
      seen : false,
      isActive : true,
      url : 'http://google.com',
      items : [
        {name: 'red', age:15},
        {name: 'blue', age:25},
        {name: 'green', age: 20},
        {name: 'yello', age: 10}
      ],

      person : {
        name : 'bob',
        age : 25,
        location : 'seoul'
      }

    }
  }

  // props: {
  //   msg: String
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
