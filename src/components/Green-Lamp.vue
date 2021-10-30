<template>
  <div class="green-lamp" v-bind:class="{ active: state.greenLight }">
   <div class="inner">{{time === 0 ? '' : time / 1000}}</div>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'Green-Lamp',
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
      return store.state.greenLight
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
.green-lamp {
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: rgb(35, 95, 35);
  border-radius: 50%;
  margin:0 auto;

}
.inner {
    display: inline-block;
    margin-top: 35px;
    font-size: 20px;
}
.active {
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
