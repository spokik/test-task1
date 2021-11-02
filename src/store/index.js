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
    Loop: null, // итератор цикла светофора
    nowSignal: null // обЪект активного на данный момент сигнала
  },
  mutations: {

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
      setTimeout(() => {
        if (this.state.Loop < 3) {
          commit('plusLoop')
        } else {
          commit('destroyLoop')
        }
      }, timeout || this.nowSignal.timeout)
      commit('setNowSignal')
    },
    saveStateOnLocal ({ commit, dispatch }, data) {
      localStorage.setItem('save', JSON.stringify(data))
    }

  },
  modules: {
  }
})
