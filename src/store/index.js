import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    redLight: false,
    yellowLight: false,
    greenLight: false
  },
  mutations: {
    onRed (state) {
      this.state.redLight = true
    },
    onYelloe (state) {
      this.state.yellowLight = true
    },
    onGreen (state) {
      this.state.greenLight = true
    },
    offAlllamp (state) {
      this.state.redLight = false
      this.state.yellowLight = false
      this.state.greenLight = false
    }
  },
  actions: {
    activeLamp ({ commit }, light) {
      if (light === 'RED') {
        commit('onRed')
      } else if (light === 'YELLOW') {
        commit('onYelloe')
      } else if (light === 'GREEN') {
        commit('onGreen')
      } else {
        commit('offAlllamp')
      }
    }
  },
  modules: {
  }
})
