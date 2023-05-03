import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dbname:'protdb',
    mainColor3:"#75D67D",
    mainColor2:"#A5D6A7",
    mainColor4:"#2E7D32",
    mainColor:"#42A5F5",
    enrichtab:0,
    currtab:0,
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
