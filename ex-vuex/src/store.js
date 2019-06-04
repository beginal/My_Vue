import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // vue 의 data 역할
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters: { // vue의 computed 역할
    allUsersCount: function(state) { // 단, 인자에 사용할 값을 넣어줘야한다
      return state.allUsers.length
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state,getters) => {
    return Math.round( getters.countOfSeoul / getters.allUsersCount *100 )
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload)

    }
  },
  actions: {
    addUsers: ({ commit }, payload) => { //function({commit})와 같음
    // context,payload
    // {commit} 커밋을 좀 더 간단하게 써주기 위해 객체형태로 불러온 것
      commit('addUsers', payload)
    }
  }
})
