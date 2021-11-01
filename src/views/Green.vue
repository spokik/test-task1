<template>
  <div class="grey-box">
    <h1>green</h1>
    <RedLamp/>
    <YellowLamp/>
    <GreenLamp/>
    <Lamp light='GREEN'/>
    <Lamp light='RED'/>
    <Lamp light='YELLOW'/>
  </div>
</template>

<script>
import store from '../store/index'
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'
import Lamp from '@/components/Lamp.vue'

export default {
  name: 'green',
  mounted () {
    const load = JSON.parse(localStorage.getItem('save'))
    if (load && load.time > 100 && load.Loop === 2) {
      store.dispatch('openRout', { index: 2, timeout: load.time })
    } else {
      store.dispatch('openRout', { index: 2, timeout: this.$store.state.cycle[2].timeout })
    }

    this.$store.watch(
      (state, getters) => state.Loop,
      (newValue, oldValue) => {
        this.$router.push(this.$store.state.cycle[newValue].rout).catch(() => {})
      }
    )
  },
  components: {
    GreenLamp,
    RedLamp,
    YellowLamp,
    Lamp
  },
  computed: {
    state () {
      return store.state
    }
  }
}
</script>
