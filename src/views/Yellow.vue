<template>
  <div class="grey-box">
    <h1>Yellow</h1>
    <RedLamp/>
    <YellowLamp/>
    <GreenLamp/>
  </div>
</template>

<script>
import store from '../store/index'

// @ is an alias to /src
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'

export default {
  name: 'Yellow',
  mounted () {
    store.dispatch('openRout', 1)
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
    GreenLamp,
    RedLamp,
    YellowLamp
  }
}
</script>
