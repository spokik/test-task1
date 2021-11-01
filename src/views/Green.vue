<template>
  <div class="grey-box">
    <h1>green</h1>
    <Lamp light='GREEN'/>
    <Lamp light='RED'/>
    <Lamp light='YELLOW'/>
  </div>
</template>

<script>
import store from '../store/index'
import Lamp from '@/components/Lamp.vue'

export default {
  name: 'green',
  created () {
    const load = JSON.parse(localStorage.getItem('save'))
    if (load && load.time > 100 && load.Loop === 2) {
      store.dispatch('openRout', { index: 2, timeout: load.time })
    } else {
      store.dispatch('openRout', { index: 2, timeout: this.$store.state.cycle[2].timeout })
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
  components: {
    Lamp
  },
  computed: {
    state () {
      return store.state
    }
  }
}
</script>
