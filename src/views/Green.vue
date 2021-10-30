<template>
  <div class="grey-box">
    <h1>green</h1>
    <RedLamp/>
    <YellowLamp/>
    <GreenLamp/>
  </div>
</template>

<script>
import store from '../store/index'
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'

export default {
  name: 'green',
  mounted () {
    const load = JSON.parse(localStorage.getItem('save'))
    if (load && load.time > 1000) {
      store.dispatch('openRout', { index: load.Loop, timeout: load.time })
    } else {
      store.dispatch('openRout', { index: 2 })
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
    YellowLamp
  },
  computed: {
    state () {
      return store.state
    }
  }
}
</script>
