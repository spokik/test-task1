<template>
  <div class="grey-box">
    <h1>red</h1>
    <Lamp light='RED'/>
    <Lamp light='YELLOW'/>
    <Lamp light='GREEN'/>
  </div>
</template>

<script>
import store from '../store/index'

// @ is an alias to /src
import Lamp from '@/components/Lamp.vue'

export default {
  name: 'red',
  created () {
    const load = JSON.parse(localStorage.getItem('save'))
    if (load && load.time > 100 && load.Loop === 0) {
      store.dispatch('openRout', { index: 0, timeout: load.time })
    } else {
      store.dispatch('openRout', { index: 0, timeout: this.$store.state.cycle[0].timeout })
    }
  },
  mounted () {
    this.$store.watch(
      (state, getters) => state.Loop,
      (newValue, oldValue) => {
        this.$router.push(this.$store.state.cycle[newValue].rout).catch(() => {})
      }
    )
  },
  computed: {
    state () {
      return store.state
    }
  },
  components: {
    Lamp
  }
}
</script>
