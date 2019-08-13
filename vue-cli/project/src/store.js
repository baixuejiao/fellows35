import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      id: '',
      regdate: ''
    },
    count: 1,
    title: 'hello',
    a: 1,
    b: 3,
    obj: {
      id: '1',
      total: 111
    },
    person: {
      name: 'zzzz',
      age: 19,
      a1: {},
      b1: {}
    }
  },
  // 同步修改状态
  mutations: {
    add(state, _item) {
      console.log(_item);
      state.count++
    },
    setInfo(state, _data){
      state.userInfo = _data;
    }
  },
  // 异步修改状态
  actions: {
    getInfo(){
      // $.ajax({{
      //   success: function(){
      //     res
      //   }
      // }})
      let res = {}
      commit('setInfo', res)
    },
    addCount1111({commit}) {
    
      commit('add')
    }
  },
  getters: {
    sum(state){
      return state.a + state.b
    },
    p1(state) {
      return {
        commonid: state.obj.id,
        commonName: state.person.name
      }
    }
  }
})
