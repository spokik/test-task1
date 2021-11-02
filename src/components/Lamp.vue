<template>
  <div class="" v-bind:class="{
    'active-red': isRedActive && isRed && isActive,
    'active-green': isGreenActive  && isGreen && isActive,
    'active-yellow': isYellowActive  && isYellow && isActive,
    'red-lamp': isRed,
    'green-lamp': isGreen,
    'yellow-lamp': isYellow
  }">
   <div class="inner">{{ showTimer }}</div>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'Lamp',
  data () {
    return {
      time: 0,
      isActive: false
    }
  },
  props: { light: String },
  computed: {
    state () {
      return store.state
    },
    timeout () {
      if (this.light === store.state.nowSignal.flag) {
        return store.state.nowSignal.timeout
      }
      return ''
    },
    showTimer () {
      if (this.light === 'RED' && this.isRedActive) {
        return this.time
      } else if (this.light === 'YELLOW' && this.isYellowActive) {
        return this.time
      } else if (this.light === 'GREEN' && this.isGreenActive) {
        return this.time
      } else {
        return ''
      }
    },
    statusTimer () {
      this.timer(store.state.nowSignal.timeout)
      return ''
    },
    isRed () {
      if (this.light === 'RED') {
        return true
      } else {
        return false
      }
    },
    isGreen () {
      if (this.light === 'GREEN') {
        return true
      } else {
        return false
      }
    },
    isYellow () {
      if (this.light === 'YELLOW') {
        return true
      } else {
        return false
      }
    },
    isRedActive () {
      return store.state.nowSignal.flag === 'RED'
    },
    isGreenActive () {
      return store.state.nowSignal.flag === 'GREEN'
    },
    isYellowActive () {
      return store.state.nowSignal.flag === 'YELLOW'
    }
  },
  //* моргание за 3 секунды до смены сигнала
  watch: {
    time (val, oldVal) {
      this.$store.dispatch('saveStateOnLocal', { time: val, Loop: this.$store.state.Loop })
      if (val > 3000) {
        this.isActive = true
      }
      if (val === 3000) {
        setInterval(() => {
          this.isActive = !this.isActive
        }, 300)
      }
      if (val === 0) {
        setTimeout(() => {
          this.isActive = false
        }, 500)
      }
    },
    statusTimer (val, oldVal) {
      if (val) {
        this.timer()
      }
    }
  },
  methods: {
    // обратный отсчет внутри компонента. В стейте обратный отсчет не хранится ...
    timer (timeout) {
      const load = JSON.parse(localStorage.getItem('save')) // Загружаемданные пользователя
      if (load.time > 100 && load.Loop === this.state.nowSignal.id) { // старт таймера с учетом данных пользователя
        const timeout = load.time
        this.time = timeout
        setInterval(() => {
          this.time -= timeout / timeout * 100
        }, timeout / timeout * 100)
      } else { // старт таймера по дефолту
        this.time = timeout
        setInterval(() => {
          this.time -= timeout / timeout * 100
        }, timeout / timeout * 100)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.green-lamp {
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: rgb(35, 95, 35);
  border-radius: 50%;
  margin:0 auto;

}
.red-lamp {
  width: 100px;
  height: 100px;
  background-color: rgb(136, 52, 52);
  border-radius: 50%;
  margin:0 auto;
}
.yellow-lamp {
  width: 100px;
  height: 100px;
  background-color: rgb(136, 134, 29);
  border-radius: 50%;
  margin:0 auto;
}
.inner {
    display: inline-block;
    margin-top: 35px;
    font-size: 20px;
}
.active-red {
  background-color:  rgb(248, 14, 14);
}
.active-yellow {
  background-color:  rgb(212, 210, 52);
}
.active-green {
  background-color:  rgb(64, 212, 64);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
