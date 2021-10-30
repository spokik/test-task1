import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cycle: [
      {
        rout: 'red',
        flag: 'RED',
        timeout: 1000 // 10000
      },
      {
        rout: 'yellow',
        flag: 'Yellow',
        timeout: 1000 // 3000
      },
      {
        rout: 'green',
        flag: 'GREEN',
        timeout: 1000 // 15000
      },
      {
        rout: 'yellow',
        flag: 'Yellow',
        timeout: 3
      }
    ],
    Loop: null,
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
    offRed (state) {
      this.state.redLight = false
    },
    offYelloe (state) {
      this.state.yellowLight = false
    },
    offGreen (state) {
      this.state.greenLight = false
    },
    offAlllamp (state) {
      this.state.redLight = false
      this.state.yellowLight = false
      this.state.greenLight = false
    },
    SelectLoop (state, index) {
      this.state.Loop = index
    },
    plusLoop (state) {
      this.state.Loop += 1
    },
    destroyLoop (state) {
      this.state.Loop = 0
    }
  },
  actions: {
    activeLamp ({ commit, dispatch }, light) {
      if (light === 'RED') {
        commit('onRed')
      } else if (light === 'YELLOW') {
        commit('onYelloe')
      } else if (light === 'GREEN') {
        commit('onGreen')
      } else {
        commit('offAlllamp')
      }
      dispatch('disableOtherLamp', light)
    },
    disableOtherLamp ({ commit }, light) {
      if (light === 'RED') {
        commit('offGreen')
        commit('offYelloe')
      } else if (light === 'YELLOW') {
        commit('offGreen')
        commit('offRed')
      } else if (light === 'GREEN') {
        commit('offYelloe')
        commit('offRed')
      } else {
        commit('offAlllamp')
      }
    },
    SelectLoop ({ commit }, index) {
      commit('SelectLoop', index)
    },
    firstStart ({ commit }, index) {
      if (this.state.Loop === null) {
        commit('SelectLoop', index)
      }
    },
    openRout ({ commit, dispatch }, index) {
      dispatch('firstStart', index)
      const iterationArr = this.state.cycle[this.state.Loop]
      dispatch('activeLamp', iterationArr.flag)
      setTimeout(() => {
        if (this.state.Loop < 3) {
          commit('plusLoop')
        } else if (this.state.Loop === 3) {
          commit('destroyLoop')
        }
      }, iterationArr.timeout)
    }
  },
  modules: {
  }
})
