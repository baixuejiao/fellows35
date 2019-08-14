import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoList: []
  },
  mutations: {
    setPhotoList(state, _data) {
      console.log(111,_data)
      state.photoList = _data
    }
  },
  actions: {

  }
})
