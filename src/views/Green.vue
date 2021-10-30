<template>
  <div class="">
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
    store.dispatch('openRout', 2)
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
