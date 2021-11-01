import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cycle: [
      {
        id: 0,
        rout: 'red',
        flag: 'RED',
        timeout: 10000 // 10000
      },
      {
        id: 1,
        rout: 'yellow',
        flag: 'YELLOW',
        timeout: 3000 // 3000
      },
      {
        id: 2,
        rout: 'green',
        flag: 'GREEN',
        timeout: 15000 // 15000
      },
      {
        id: 3,
        rout: 'yellow',
        flag: 'YELLOW',
        timeout: 3000 // 3000
      }
    ],
    Loop: null,
    nowSignal: null,
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
    },
    setNowSignal (state, index) {
      this.state.nowSignal = state.cycle[index || state.Loop]
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
        commit('setNowSignal', index)
      }
    },
    openRout ({ commit, dispatch }, { index, timeout }) {
      dispatch('firstStart', index)
      const iterationArr = this.state.cycle[this.state.Loop]
      dispatch('activeLamp', iterationArr.flag)
      setTimeout(() => {
        if (this.state.Loop < 3) {
          commit('plusLoop')
        } else {
          commit('destroyLoop')
        }
      }, timeout || iterationArr.timeout)
      commit('setNowSignal')
    },
    saveStateOnLocal ({ commit, dispatch }, data) {
      localStorage.setItem('save', JSON.stringify(data))
    }

  },
  modules: {
  }
})
