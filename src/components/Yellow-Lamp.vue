<template>
  <div class="yellow-lamp" v-bind:class="{ active: state.yellowLight }">
    {{time / 1000}}
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'Yellow-Lamp',
  data () {
    return {
      time: 0
    }
  },
  computed: {
    state () {
      return store.state
    },
    statusTimer () {
      return store.state.yellowLight
    }
  },
  watch: {
    statusTimer (val, oldVal) {
      if (val) {
        this.timer()
      }
    }
  },
  methods: {
    timer () {
      const timeout = this.state.cycle[this.state.Loop].timeout
      this.time = timeout
      setInterval(() => {
        this.time -= timeout / timeout * 1000
      }, timeout / timeout * 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yellow-lamp {
  width: 100px;
  height: 100px;
  background-color: rgb(136, 134, 29);
  border-radius: 50%;
  margin:0 auto;
}
.active {
  background-color: rgb(212, 210, 52);
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
