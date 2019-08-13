import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        tag: 'income',
        title: '签到',
        info: '签到送积分2019.07.08',
        cost: '+10'
      },
      {
        tag: 'income',
        title: '签到',
        info: '签到送积分2019.07.07',
        cost: '+10'
      },
      {
        tag: 'pay',
        title: '兑换购物券',
        info: '活动扣积分2019.07.06',
        cost: '-3000'
      },
      {
        tag: 'income',
        title: '签到',
        info: '签到送积分2019.07.07',
        cost: '+10'
      },
      {
        tag: 'income',
        title: '签到',
        info: '签到送积分2019.07.07',
        cost: '+10'
      }, 
      {
        tag: 'pay',
        title: '兑换购物券',
        info: '活动扣积分2019.07.06',
        cost: '-3000'
      },

    ],
    incomelist: [],
    paylist: []

  },
  getters: {
    all(state){
      return [...state.incomelist, ...state.paylist]
    }
  },
  mutations: {

  },
  actions: {

  }
})
