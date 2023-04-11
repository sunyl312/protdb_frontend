import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainColor1:"#A5D6A7",
    mainColor:"#A5D6A7",
    chipColors:{
      quality:{
        high:'green',
        middle:'yellow',
        low:'red'
      },
      biomarker_category:{
        diagnosis:"pink lighent-2",
        prognosis:"teal lighent-2",
        treatment:"orange lighent-2",
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
