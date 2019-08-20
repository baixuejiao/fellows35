import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoList: [],
    a: 1,
    b: 2,
    list: []
  },

  mutations: {
    setPhotoList(state, _data) {
      console.log(111,_data)
      state.photoList = _data
    }
  },
  actions: {
    getList() {
      commit('setPhotoList', data)
    }
  },
  getters: {
    sum(){
      return  state.a + state.b
    }
  }
})
